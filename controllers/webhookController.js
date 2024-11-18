 const registerWebhook = (req, res) => {
    const { url, events } = req.body;
    // Logic to register webhook
    res.json({ status: "Webhook registered successfully" });
};

 const testWebhook = (req, res) => {
    // Logic to send a test event to a registered webhook
    res.json({ status: "Test event sent" });
};
module.exports = {registerWebhook ,testWebhook }