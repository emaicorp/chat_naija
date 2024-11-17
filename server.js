import dotenv from 'dotenv'; // Correct import
import express from 'express';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import chatRoutes from './routes/chatRoutes.js';
import modelRoutes from './routes/modelRoutes.js';
import settingsRoutes from './routes/settingsRoutes.js';
import analyticsRoutes from './routes/analyticsRoutes.js';
import webhookRoutes from './routes/webhookroutes.js';

// Load .env file
dotenv.config();

// Test API key
if (!process.env.OPENAI_API_KEY) {
    console.error("Error: OPENAI_API_KEY is not defined in .env");
    process.exit(1); // Exit if key is missing
}

// Initialize DB connection
connectDB();

// Initialize Express app
const app = express();
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
