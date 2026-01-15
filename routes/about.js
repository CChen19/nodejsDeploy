import express from 'express';
var router = express.Router();

/* GET about page */
router.get('/', function(req, res, next) {
  res.json({
    project: 'Express Starter',
    description: 'A starter template for building Express.js applications',
    created: '2026',
    features: [
      'RESTful API routing',
      'Static file serving',
      'Cookie parsing',
      'Request logging',
      'ES6 modules support'
    ]
  });
});

export default router;
