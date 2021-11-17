//variables para importar
const express = require('express')
const productRouter =  require('./routes/product')
const productApiRouter =  require('./routes/productApi')
const error404 =  require('./middleware/errors')


const app = express()
const port = 3000

// Para habilitar envio de JSON al servidor. Sin esto no podemos hacer POST
app.use(express.json()) 

app.set('view engine', 'pug');
app.set('views','./views');

//********* RUTAS PARA LA VISTA WEB home **********/
app.get('/', (req, res) => {
  res.send('Mi home de productos')
})

/************ RUTAS PARA LA WEB *****************/
app.use("/", productRouter)

/*************** RUTAS PARA LA API ***************/
app.use("/api", productApiRouter)


//******Manejo de errores PAGINA 404*************//
// http://localhost:3000/products=3?API_KEY=hola123
app.use(error404)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})