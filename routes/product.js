//variables para incluir en el proyecto  el archivo product, el middleware hasApiKey y el modulo express
//Así es como incluimos y usamos un paquete instalado desde npm en cualquier archivo JavaScript en nuestro proyecto.
const product = require('../controllers/product')
const hasApiKey = require('../middlewares/hasApiKey');
const routes = require('express').Router();



//*********** RUTAS PARA LA VISTA WEB ***************/

  // endpoints de ejemplo para la web
    // http://localhost:3000/products/5
    // http://localhost:3000/products/3
    // http://localhost:3000/products
  
  // Poniendo hasApiKey, le pasamos como parametro que se valide la API KEY solo en este endpoint.
  routes.get('/products/:id?', product.getProduct);
  routes.post('/products', hasApiKey, product.createProduct); // solo postea quien tenga apikey


  //rutas para editar
  //routes.put()

  //ruta para borrar
  //routes.delete('/products',product.deleteProduct)


  module.exports = routes;