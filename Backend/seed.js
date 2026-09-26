require('dotenv').config();
const mongoose = require('mongoose');
const Package = require('./models/Package');
const defaultPackages = require('./data/packagesData');

const seedDatabase = async () => {
  const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/safetrip';
  console.log(`Connecting to MongoDB at: ${uri.replace(/\/\/.*@/, '//***:***@')}...`);

  try {
    await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000
    });
    console.log('✅ Connected to MongoDB successfully.');

    console.log('Clearing existing packages...');
    await Package.deleteMany({});

    console.log(`Inserting ${defaultPackages.length} curated travel packages...`);
    const inserted = await Package.insertMany(defaultPackages);

    console.log(`🎉 Successfully seeded ${inserted.length} packages into MongoDB!`);
    await mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.warn('⚠️ Could not connect to MongoDB for seeding:', error.message);
    console.warn('Note: The application will automatically use in-memory seed data when MongoDB is not connected.');
    process.exit(0);
  }
};

seedDatabase();
