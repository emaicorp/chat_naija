const dotenv = require('dotenv');
dotenv.config(); // Load environment variables

const { OpenAI } = require('openai');
const ChatHistory = require('../models/ChatHistory.js');

// Ensure apiKey is loaded after dotenv config
if (!process.env.OPENAI_API_KEY) {
    throw new Error('OPENAI_API_KEY is missing in the .env file');
}

const openai = new OpenAI({ 
    apiKey: process.env.OPENAI_API_KEY,
    baseURL: 'https://integrate.api.nvidia.com/v1',
});

// Function to adjust the max_tokens dynamically based on message complexity
const getResponseLength = (message) => {
    const wordCount = message.split(" ").length; // Count the words in the user message

    // Determine max_tokens based on message length
    if (wordCount < 5) {
        return 20;  // Short response for simple questions
    } else if (wordCount >= 5 && wordCount <= 10) {
        return 50;  // Medium response for moderately complex questions
    }  else if (wordCount >= 5 && wordCount <= 15 ) {
        return 150;  // Medium response for moderately complex questions
    }
    else {
        return 400;  // Longer response for more complex questions
    }
};

const sendMessage = async (req, res) => {
    const { userId, message, context = [] } = req.body;

    try {
        // Adjust max_tokens based on the user's message complexity
        const maxTokens = getResponseLength(message);

        const completion = await openai.chat.completions.create({
            model: "nvidia/llama-3.1-nemotron-70b-instruct",
            messages: [
                { role: "system", content: "You are a chatbot that speaks fluent Nigerian Pidgin." },
                { role: "user", content: message },
                ...context.map(msg => ({ role: "user", content: msg })),
            ],
            temperature: 0.5,
            max_tokens: maxTokens,  // Set dynamic max tokens here
        });

        const reply = completion.choices[0]?.message?.content || 'No response';
        
        // Save chat history
        const chatHistory = new ChatHistory({ userId, messages: [{ message, reply }] });
        await chatHistory.save();

        // Send response
        res.json({ reply, timestamp: new Date() });
    } catch (error) {
        console.error("Error during OpenAI API call:", error);
        res.status(500).json({ error: 'An error occurred while processing your request.' });
    }
};

const getChatHistory = async (req, res) => {
    const { userId } = req.body;
    const history = await ChatHistory.findOne({ userId });
    res.json(history || { userId, history: [] });
};

module.exports = { sendMessage, getChatHistory };
