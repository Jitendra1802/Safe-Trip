const Package = require('../models/Package');
const defaultPackages = require('../data/packagesData');
const mongoose = require('mongoose');

// Helper to check if DB is connected
const isDbConnected = () => mongoose.connection.readyState === 1;

// GET /api/packages
exports.getAllPackages = async (req, res) => {
  try {
    const { category, priceRange, sort, search, featured } = req.query;

    if (isDbConnected()) {
      let query = {};

      if (category && category !== 'all') {
        query.category = category.toLowerCase();
      }

      if (priceRange && priceRange !== 'all') {
        query.priceRange = priceRange.toLowerCase();
      }

      if (featured === 'true') {
        query.featured = true;
      }

      if (search && search.trim() !== '') {
        const regex = new RegExp(search.trim(), 'i');
        query.$or = [
          { title: regex },
          { destination: regex },
          { description: regex }
        ];
      }

      let sortOption = {};
      if (sort === 'price-low') {
        sortOption = { price: 1 };
      } else if (sort === 'price-high') {
        sortOption = { price: -1 };
      } else if (sort === 'rating') {
        sortOption = { rating: -1 };
      } else {
        sortOption = { featured: -1, createdAt: -1 };
      }

      const packages = await Package.find(query).sort(sortOption);
      return res.status(200).json({
        success: true,
        count: packages.length,
        source: 'database',
        data: packages
      });
    }

    // In-memory fallback
    let results = [...defaultPackages];

    if (category && category !== 'all') {
      results = results.filter(p => p.category.toLowerCase() === category.toLowerCase());
    }

    if (priceRange && priceRange !== 'all') {
      results = results.filter(p => p.priceRange.toLowerCase() === priceRange.toLowerCase());
    }

    if (featured === 'true') {
      results = results.filter(p => p.featured);
    }

    if (search && search.trim() !== '') {
      const q = search.trim().toLowerCase();
      results = results.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.destination.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
      );
    }

    if (sort === 'price-low') {
      results.sort((a, b) => a.price - b.price);
    } else if (sort === 'price-high') {
      results.sort((a, b) => b.price - a.price);
    } else if (sort === 'rating') {
      results.sort((a, b) => b.rating - a.rating);
    }

    return res.status(200).json({
      success: true,
      count: results.length,
      source: 'memory_fallback',
      data: results
    });

  } catch (error) {
    console.error('Error in getAllPackages:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch packages',
      error: error.message
    });
  }
};

// GET /api/packages/:identifier (id, slug, or title match)
exports.getPackageByIdentifier = async (req, res) => {
  try {
    const { identifier } = req.params;
    const decoded = decodeURIComponent(identifier).trim();

    if (isDbConnected()) {
      let pkg = null;
      if (mongoose.Types.ObjectId.isValid(decoded)) {
        pkg = await Package.findById(decoded);
      }
      if (!pkg) {
        pkg = await Package.findOne({
          $or: [
            { slug: decoded.toLowerCase() },
            { title: new RegExp(`^${decoded}$`, 'i') }
          ]
        });
      }

      if (!pkg) {
        return res.status(404).json({
          success: false,
          message: `Package not found for identifier: ${decoded}`
        });
      }

      return res.status(200).json({
        success: true,
        source: 'database',
        data: pkg
      });
    }

    // In-memory fallback
    const decodedSlug = decoded.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    const pkg = defaultPackages.find(p =>
      p.slug === decodedSlug ||
      p.slug === decoded.toLowerCase() ||
      p.title.toLowerCase() === decoded.toLowerCase()
    );

    if (!pkg) {
      return res.status(404).json({
        success: false,
        message: `Package not found for identifier: ${decoded}`
      });
    }

    return res.status(200).json({
      success: true,
      source: 'memory_fallback',
      data: pkg
    });

  } catch (error) {
    console.error('Error in getPackageByIdentifier:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch package details',
      error: error.message
    });
  }
};

// POST /api/packages (Admin/Developer creation)
exports.createPackage = async (req, res) => {
  try {
    const packageData = req.body;

    if (!packageData.title || !packageData.price || !packageData.destination) {
      return res.status(400).json({
        success: false,
        message: 'Title, price, and destination are required fields'
      });
    }

    if (isDbConnected()) {
      const newPkg = new Package(packageData);
      await newPkg.save();
      return res.status(201).json({
        success: true,
        message: 'Package created successfully',
        data: newPkg
      });
    }

    // Push to memory fallback
    defaultPackages.push(packageData);
    return res.status(201).json({
      success: true,
      message: 'Package created in memory store (DB not connected)',
      data: packageData
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to create package',
      error: error.message
    });
  }
};
