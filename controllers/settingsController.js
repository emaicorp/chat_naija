export const updateSettings = (req, res) => {
    const { personality, humor_level } = req.body;
    // Logic to update settings
    res.json({ status: "Settings updated", applied: { personality, humor_level } });
};