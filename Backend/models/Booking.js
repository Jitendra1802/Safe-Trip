const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  bookingReference: {
    type: String,
    unique: true,
    index: true
  },
  tripName: {
    type: String,
    required: [true, 'Trip name is required']
  },
  packageId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Package'
  },
  fullName: {
    type: String,
    required: [true, 'Full name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true
  },
  travelDate: {
    type: Date,
    required: [true, 'Travel date is required']
  },
  returnDate: {
    type: Date
  },
  travelers: {
    type: Number,
    required: true,
    min: 1,
    default: 1
  },
  accommodation: {
    type: String,
    enum: ['standard', 'deluxe', 'suite', 'villa'],
    default: 'standard'
  },
  specialRequests: {
    type: String,
    default: ''
  },
  emergencyContact: {
    type: String,
    default: ''
  },
  emergencyPhone: {
    type: String,
    default: ''
  },
  basePrice: {
    type: Number,
    required: true
  },
  taxes: {
    type: Number,
    required: true
  },
  totalPrice: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['confirmed', 'pending', 'cancelled'],
    default: 'confirmed'
  }
}, {
  timestamps: true
});

// Auto-generate booking reference e.g. ST-2026-XXXX
bookingSchema.pre('save', function(next) {
  if (!this.bookingReference) {
    const randomCode = Math.random().toString(36).substring(2, 7).toUpperCase();
    this.bookingReference = `ST-${new Date().getFullYear()}-${randomCode}`;
  }
  next();
});

module.exports = mongoose.model('Booking', bookingSchema);
