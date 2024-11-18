 const getModelStatus = (req, res) => {
    res.json({ model: "NVIDIA GPT", status: "active", uptime: "24h" });
};

 const reloadModel = (req, res) => {
    // Logic to reload the model
    res.json({ status: "Model reloaded successfully" });
};
module.exports = {getModelStatus ,reloadModel }