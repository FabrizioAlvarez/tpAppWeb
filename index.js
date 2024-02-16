const express = require ("express")

const bodyParser = require('body-parser');

const app = express()

const port = 3020

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());

const postRoutes = require('./routes/post.routes.js');
const usuariosRoutes = require('./routes/usuarios.routes.js');


app.use('/post', postRoutes);
app.use('/usuarios', usuariosRoutes);

app.get('/', (req, res) => {
    res.send('Bienvenido');
});


app.listen(port, ()=>{
    console.log(`Servidor levantado en puerto ${port}`)
})