/*********Funcion para validar si la apikey es valida-- MIDDLEWARE */
//// http://localhost:3000/things/pepe/5?API_KEY=hola123// le estamos diciendo que tiene que ser escrito asi estrictamente.
//Debe haber documentacion para que se sepa como funciona//
const hasApiKey = (req,res,next)=> {
    
    if(req.query.API_KEY && req.query.API_KEY=="hola123"){
      next();
    }
    else {
      const data = {
        message:"API KEY no válida o inexistente",
        error:403
      }
      res.status(403).render("error",{data});
    }
}

module.exports = hasApiKey;