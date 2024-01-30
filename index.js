const express = require ("express")

const bodyParser = require('body-parser');

const app = express()

const port = 3000

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());

const Rutas =  require('./routes/blogRoutes.js');


app.use('/', Rutas)



app.listen(port, ()=>{
    console.log(`Servidor levantado en puerto ${port}`)
})