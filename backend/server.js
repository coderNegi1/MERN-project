import express from 'express';
import mongoose from 'mongoose';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';

const app = express();

//Load environment variables first
dotenv.config({ path: './config.env' });

// Connect to MongoDB
connectDB();

// Middleware to parse JSON and URL-encoded data (MUST BE BEFORE ROUTES)
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

// Define Routes AFTER Middleware
app.use('/api/v1/auth', authRoutes);

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
