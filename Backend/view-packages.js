require('dotenv').config();
const mongoose = require('mongoose');
const Package = require('./models/Package');

async function viewPackages() {
  try {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      console.error('❌ MONGODB_URI is not defined in .env');
      process.exit(1);
    }

    await mongoose.connect(uri);

    const packages = await Package.find({}).sort({ price: 1 });

    if (packages.length === 0) {
      console.log('\n⚠️ No packages found in the database. Run "npm run seed" to populate.\n');
      process.exit(0);
    }

    console.log(`\n📦 ========== SAFE TRIP: TRAVEL PACKAGES (${packages.length}) ==========`);

    const tableData = packages.map((p, idx) => ({
      '#': idx + 1,
      'Title': p.title,
      'Category': (p.category || 'standard').toUpperCase(),
      'Price': `₹${p.price.toLocaleString('en-IN')}`,
      'Duration': p.duration,
      'Rating': `⭐ ${p.rating}`,
      'Safety Status': p.safetyStatus || 'Safe'
    }));

    console.table(tableData);
    console.log(`========================================================================\n`);

    await mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error('❌ Error fetching packages:', error.message);
    process.exit(1);
  }
}

viewPackages();
