const Booking = require('../models/Booking');
const Package = require('../models/Package');
const defaultPackages = require('../data/packagesData');
const mongoose = require('mongoose');

const isDbConnected = () => mongoose.connection.readyState === 1;

// In-memory bookings store for offline/demo fallback
const inMemoryBookings = [];

// POST /api/bookings
exports.createBooking = async (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      tripName,
      travelDate,
      returnDate,
      travelers = 1,
      accommodation = 'standard',
      specialRequests,
      emergencyContact,
      emergencyPhone
    } = req.body;

    // Validation
    if (!fullName || !email || !phone || !tripName || !travelDate) {
      return res.status(400).json({
        success: false,
        message: 'Please provide full name, email, phone, trip name, and travel date'
      });
    }

    const travelerCount = parseInt(travelers) || 1;

    // Determine package base price
    let basePrice = 4500;
    let matchedPackage = null;

    if (isDbConnected()) {
      matchedPackage = await Package.findOne({
        $or: [
          { title: new RegExp(`^${tripName}$`, 'i') },
          { slug: tripName.toLowerCase() }
        ]
      });
    }

    if (!matchedPackage) {
      matchedPackage = defaultPackages.find(p =>
        p.title.toLowerCase() === tripName.toLowerCase() ||
        p.slug === tripName.toLowerCase()
      );
    }

    if (matchedPackage) {
      basePrice = matchedPackage.price;
    }

    // Accommodation multiplier
    let multiplier = 1;
    switch (accommodation.toLowerCase()) {
      case 'deluxe': multiplier = 1.5; break;
      case 'suite': multiplier = 2.0; break;
      case 'villa': multiplier = 3.0; break;
      default: multiplier = 1.0;
    }

    const subtotal = Math.round(basePrice * travelerCount * multiplier);
    const taxes = Math.round(subtotal * 0.18); // 18% GST
    const totalPrice = subtotal + taxes;

    const reference = `ST-${new Date().getFullYear()}-${Math.random().toString(36).substring(2, 7).toUpperCase()}`;

    const bookingPayload = {
      bookingReference: reference,
      tripName,
      packageId: matchedPackage?._id,
      fullName,
      email,
      phone,
      travelDate: new Date(travelDate),
      returnDate: returnDate ? new Date(returnDate) : undefined,
      travelers: travelerCount,
      accommodation,
      specialRequests: specialRequests || '',
      emergencyContact: emergencyContact || '',
      emergencyPhone: emergencyPhone || '',
      basePrice: subtotal,
      taxes,
      totalPrice,
      status: 'confirmed',
      createdAt: new Date()
    };

    if (isDbConnected()) {
      const newBooking = new Booking(bookingPayload);
      await newBooking.save();

      return res.status(201).json({
        success: true,
        message: 'Booking confirmed successfully!',
        source: 'database',
        data: newBooking
      });
    }

    // In-memory fallback
    inMemoryBookings.unshift(bookingPayload);
    return res.status(201).json({
      success: true,
      message: 'Booking confirmed successfully (Stored in local session memory)!',
      source: 'memory_fallback',
      data: bookingPayload
    });

  } catch (error) {
    console.error('Error in createBooking:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to process booking',
      error: error.message
    });
  }
};

// GET /api/bookings
exports.getBookings = async (req, res) => {
  try {
    const { email } = req.query;

    if (isDbConnected()) {
      const query = email ? { email: email.toLowerCase() } : {};
      const bookings = await Booking.find(query).sort({ createdAt: -1 }).limit(50);
      return res.status(200).json({
        success: true,
        count: bookings.length,
        source: 'database',
        data: bookings
      });
    }

    let results = inMemoryBookings;
    if (email) {
      results = results.filter(b => b.email.toLowerCase() === email.toLowerCase());
    }

    return res.status(200).json({
      success: true,
      count: results.length,
      source: 'memory_fallback',
      data: results
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to retrieve bookings',
      error: error.message
    });
  }
};
