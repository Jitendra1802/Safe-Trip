const mongoose = require('mongoose');

const packageSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Package title is required'],
    trim: true
  },
  slug: {
    type: String,
    unique: true,
    index: true
  },
  destination: {
    type: String,
    required: [true, 'Destination is required'],
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  duration: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  priceDisplay: {
    type: String,
    required: true
  },
  priceRange: {
    type: String,
    enum: ['low', 'mid', 'high', 'premium'],
    required: true
  },
  category: {
    type: String,
    enum: ['economy', 'standard', 'premium'],
    required: true
  },
  rating: {
    type: Number,
    default: 4.5,
    min: 1,
    max: 5
  },
  reviewsCount: {
    type: Number,
    default: 24
  },
  weather: {
    type: String,
    default: 'Sunny'
  },
  weatherIcon: {
    type: String,
    default: '☀️'
  },
  safetyStatus: {
    type: String,
    default: 'Safe Zone'
  },
  safetyIcon: {
    type: String,
    default: '✅'
  },
  safetyAdvisory: {
    type: String,
    default: 'All clear. Standard travel precautions apply.'
  },
  image: {
    type: String,
    required: true
  },
  gallery: [{
    type: String
  }],
  inclusions: [{
    type: String
  }],
  exclusions: [{
    type: String
  }],
  itinerary: [{
    day: Number,
    title: String,
    details: String
  }],
  featured: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

// Auto-generate slug before saving if not present
packageSchema.pre('save', function(next) {
  if (!this.slug) {
    this.slug = this.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
  }
  next();
});

module.exports = mongoose.model('Package', packageSchema);
