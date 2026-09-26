require('dotenv').config();
const mongoose = require('mongoose');
const Booking = require('./models/Booking');
require('./models/Package'); // Register Package model for populate

async function viewBookings() {
  try {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      console.error('❌ MONGODB_URI is not defined in .env');
      process.exit(1);
    }

    await mongoose.connect(uri);

    const bookings = await Booking.find({})
      .sort({ createdAt: -1 })
      .populate('packageId', 'title')
      .lean();

    if (bookings.length === 0) {
      console.log('\n⚠️ No bookings found in the database.\n');
      process.exit(0);
    }

    console.log(`\n📋 ========== SAFE TRIP: ALL BOOKINGS (${bookings.length}) ==========`);

    const tableData = bookings.map((b, idx) => ({
      '#': idx + 1,
      'Booking Ref': b.bookingReference || 'N/A',
      'Customer Name': b.fullName || b.name || 'Guest',
      'Email': b.email || 'N/A',
      'Phone': b.phone || 'N/A',
      'Trip Name': b.tripName || b.packageId?.title || 'Tour Package',
      'Travel Date': b.travelDate ? new Date(b.travelDate).toISOString().split('T')[0] : 'N/A',
      'Guests': b.travelers || b.guests || 1,
      'Total Amount': b.totalPrice ? `₹${b.totalPrice.toLocaleString('en-IN')}` : '₹0',
      'Status': (b.status || 'confirmed').toUpperCase()
    }));

    console.table(tableData);

    const totalRevenue = bookings.reduce((sum, b) => sum + (b.totalPrice || 0), 0);
    console.log(`💰 Total Revenue Recorded: ₹${totalRevenue.toLocaleString('en-IN')}`);
    console.log(`========================================================\n`);

    await mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error('❌ Error fetching bookings:', error.message);
    process.exit(1);
  }
}

viewBookings();
