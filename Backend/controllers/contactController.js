const Contact = require('../models/Contact');
const mongoose = require('mongoose');

const isDbConnected = () => mongoose.connection.readyState === 1;
const inMemoryContacts = [];

// POST /api/contact
exports.submitContact = async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, subject, and message are required'
      });
    }

    const payload = {
      name,
      email,
      phone: phone || '',
      subject,
      message,
      createdAt: new Date()
    };

    if (isDbConnected()) {
      const contactEntry = new Contact(payload);
      await contactEntry.save();
      return res.status(201).json({
        success: true,
        message: 'Your message has been received! Our support team will get back to you within 24 hours.',
        source: 'database',
        data: contactEntry
      });
    }

    inMemoryContacts.unshift(payload);
    return res.status(201).json({
      success: true,
      message: 'Your message has been received! (Stored in active session)',
      source: 'memory_fallback',
      data: payload
    });

  } catch (error) {
    console.error('Error in submitContact:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to submit contact message',
      error: error.message
    });
  }
};
