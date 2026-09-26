const express = require('express');
const router = express.Router();
const packageController = require('../controllers/packageController');

router.get('/', packageController.getAllPackages);
router.get('/:identifier', packageController.getPackageByIdentifier);
router.post('/', packageController.createPackage);

module.exports = router;
