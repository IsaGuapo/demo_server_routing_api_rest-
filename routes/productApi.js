const productApi = require('../controllers/productApi');
const hasApiKey = require('../middlewares/hasApiKey');
const routes = require('express').Router();

/************** RUTAS PARA LA API ******************/
//endpoint de ejemplo para la api
  // http://localhost:3000/api/products/5
  // http://localhost:3000/api/products/3
  // http://localhost:3000/api/products
  routes.get('/products/:id?', productApi.getProduct);
  routes.post('/products', hasApiKey, productApi.createProduct);

  module.exports = routes;