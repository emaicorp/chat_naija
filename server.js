const dotenv = require('dotenv');
dotenv.config(); // Load environment variables
const cors = require('cors')

const express = require('express');
const connectDB = require('./config/db.js');
const authRoutes = require('./routes/authRoutes.js');
const chatRoutes = require('./routes/chatRoutes.js');
const modelRoutes = require('./routes/modelRoutes.js');
const settingsRoutes = require('./routes/settingsRoutes.js');
const analyticsRoutes = require('./routes/analyticsRoutes.js');
const webhookRoutes = require('./routes/webhookRoutes.js');

// Load .env file

// Test API key
if (!process.env.OPENAI_API_KEY) {
    console.error("Error: OPENAI_API_KEY is not defined in .env");
    process.exit(1); // Exit if key is missing
}

// Initialize DB connection
connectDB();

// Initialize Express app
const app = express();
app.use(cors({
    origin: 'http://localhost:5173', // Allow all origins
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
    credentials: true // Set to false because credentials cannot be sent with '*' as origin
}));
const port = process.env.PORT || 3000;



app.use(express.json());

// API Routes
app.use('/auth', authRoutes);
app.use('/chat', chatRoutes);
app.use('/model', modelRoutes);
app.use('/settings', settingsRoutes);
app.use('/analytics', analyticsRoutes);
app.use('/webhook', webhookRoutes);

// Start Server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
