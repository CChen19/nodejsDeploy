import express from 'express';
var router = express.Router();

// Sample products data
const products = [
  { id: 1, name: 'Laptop', price: 999.99, category: 'Electronics' },
  { id: 2, name: 'Coffee Maker', price: 79.99, category: 'Home' },
  { id: 3, name: 'Running Shoes', price: 129.99, category: 'Sports' }
];

/* GET all products */
router.get('/', function(req, res, next) {
  res.json({
    success: true,
    data: products
  });
});

/* GET product by id */
router.get('/:id', function(req, res, next) {
  const product = products.find(p => p.id === parseInt(req.params.id));
  
  if (product) {
    res.json({
      success: true,
      data: product
    });
  } else {
    res.status(404).json({
      success: false,
      message: 'Product not found'
    });
  }
});

/* POST create new product */
router.post('/', function(req, res, next) {
  const newProduct = {
    id: products.length + 1,
    name: req.body.name,
    price: req.body.price,
    category: req.body.category
  };
  
  products.push(newProduct);
  
  res.status(201).json({
    success: true,
    data: newProduct
  });
});

export default router;
