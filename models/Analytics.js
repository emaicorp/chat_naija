const mongoose = require('mongoose');

const analyticsSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    totalMessages: { type: Number, default: 0 },
    lastInteraction: { type: Date },
});

const Analytics = mongoose.model('Analytics', analyticsSchema);
module.exports = Analytics;