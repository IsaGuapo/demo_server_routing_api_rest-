

//******Manejo de errores PAGINA 404*************//
// http://localhost:3000/products=3?API_KEY=hola123
const error404 =  (req,res,next) => {
    const data = {
      message:"Error! 404 not found",
      error: 404
    }
    res.status(404).render('error',{data});
  };

  module.exports = error404;

const errors = {
    error404
    // otro error aquí...
}
module.exports = errors;
  