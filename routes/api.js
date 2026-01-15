import express from 'express';
var router = express.Router();

/* GET API health check */
router.get('/health', function(req, res, next) {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

/* GET API info */
router.get('/info', function(req, res, next) {
  res.json({
    name: 'Express Starter API',
    version: '1.0.0',
    description: 'A simple Express API with custom routes',
    endpoints: [
      '/api/health',
      '/api/info',
      '/users',
      '/products'
    ]
  });
});

export default router;
