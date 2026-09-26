require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

const packageRoutes = require('./routes/packageRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const contactRoutes = require('./routes/contactRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static frontend files from ../Frontend directory
app.use(express.static(path.join(__dirname, '../Frontend')));

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/safetrip';

let isConnected = false;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGODB_URI, {
      serverSelectionTimeoutMS: 4000
    });
    isConnected = true;
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    isConnected = false;
    console.warn(`⚠️ MongoDB connection unavailable (${err.message}).`);
    console.log(`ℹ️ Safe Trip running with In-Memory fallback dataset. Update MONGODB_URI in .env to connect to MongoDB Atlas.`);
  }
};

connectDB();

// API Routes
app.use('/api/packages', packageRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/contact', contactRoutes);

// Health Check Endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'online',
    appName: 'Safe Trip API',
    version: '1.0.0',
    database: mongoose.connection.readyState === 1 ? 'connected' : 'in-memory-fallback',
    timestamp: new Date().toISOString()
  });
});

// Fallback route for SPA / direct HTML navigation if needed
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../Frontend', 'index.html'));
});

// Centralized error handling
app.use((err, req, res, next) => {
  console.error('Unhandled Server Error:', err);
  res.status(500).json({
    success: false,
    message: 'Internal server error occurred',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Safe Trip server running at http://localhost:${PORT}`);
  console.log(`📡 API Endpoints available at:`);
  console.log(`   - GET  http://localhost:${PORT}/api/packages`);
  console.log(`   - POST http://localhost:${PORT}/api/bookings`);
  console.log(`   - POST http://localhost:${PORT}/api/contact`);
  console.log(`   - GET  http://localhost:${PORT}/api/health`);
});
