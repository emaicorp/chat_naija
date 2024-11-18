 const getUsageAnalytics = (req, res) => {
    // Logic to get usage analytics
    res.json({ totalMessages: 1500, activeUsers: 300, mostFrequentQueries: ["How you dey?", "Wetin de happen?"] });
};

 const getUserAnalytics = (req, res) => {
    const { userId } = req.params;
    // Logic to get user analytics
    res.json({ userId, totalMessages: 45, lastInteraction: new Date() });
};
module.exports = {getUsageAnalytics ,getUserAnalytics }