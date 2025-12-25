const express = require('express');
const router = express.Router();
const { submitContactForm } = require('../controllers/contactController');

// Submit contact form
router.post('/', submitContactForm);

// Health check endpoint
router.get('/health', (req, res) => {
  res.json({ 
    success: true, 
    message: 'Contact API is healthy',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV
  });
});

module.exports = router;