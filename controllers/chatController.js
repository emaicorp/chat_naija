import { OpenAI } from 'openai';
import ChatHistory from '../models/ChatHistory.js';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export const sendMessage = async (req, res) => {
    const { userId, message, context } = req.body;

    try {
        const completion = await openai.chat.completions.create({
            model: "nvidia/llama-3.1-nemotron-70b-instruct",
            messages: [
                { role: "system", content: "You are a chatbot that speaks fluent Nigerian Pidgin." },
                { role: "user", content: message },
                ...context.map(msg => ({ role: "user", content: msg })),
            ],
            temperature: 0.5,
            max_tokens: 1024,
        });

        const reply = completion.choices[0]?.message?.content || 'No response';
        const chatHistory = new ChatHistory({ userId, messages: [{ message, reply }] });
        await chatHistory.save();

        res.json({ reply, timestamp: new Date() });
    } catch (error) {
        console.error("Error during OpenAI API call:", error);
        res.status(500).json({ error: 'An error occurred while processing your request.' });
    }
};

export const getChatHistory = async (req, res) => {
    const { userId } = req.params;
    const history = await ChatHistory.findOne({ userId });
    res.json(history || { userId, history: [] });
};