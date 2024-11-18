const mongoose = require('mongoose');

const chatHistorySchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    messages: [
        {
            message: String,
            reply: String,
            timestamp: { type: Date, default: Date.now },
        },
    ],
});

const ChatHistory = mongoose.model('ChatHistory', chatHistorySchema);
module.exports = ChatHistory;