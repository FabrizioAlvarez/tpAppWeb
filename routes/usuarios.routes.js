const express = require('express')
const router = express.Router()
const path = require('path')
const fs = require('fs')

const usuariosFilePath = path.join(__dirname, '../json/usuarios.json')
const Usuarios = JSON.parse(fs.readFileSync(usuariosFilePath, 'utf-8'))


const PostFilePath = path.join(__dirname, '../json/post.json')
const Posts = JSON.parse(fs.readFileSync(PostFilePath, 'utf-8'))


router.get('/usuarios', (req, res) => {
  res.send('Ruta de usuarios')
});


//Autentificacion de usuario retornando su ID, nombre y Email. En caso contrario su codigo de respuesta correspondiente.
router.get("/login/:email/:contra", (req, res) => {
    const usu = req.params.email;
    const pass = req.params.contra;

    let usuarioCorrecto = false;

    Usuarios.forEach(usuario => {
        if (usu == usuario.Email && pass == usuario.Pass) {
            usuarioCorrecto = true;
            res.send(`<h1>Se ingresó correctamente</h1> <p>El id del usuario es ${usuario.Id}, su nombre es ${usuario.Nombre} y su email es ${usuario.Email}</p>`)
        }
    })

    if (!usuarioCorrecto) {
        res.status(400).send("<h1>No hay usuarios con los parámetros ingresados</h1>")
    }
})


//Creacion de usuarios con los parametros necesarios.
router.post('/nuevoUser', (req, res) => {
    const {Nombre, Email, Pass } = req.body;

    const nuevoUsuario = {
        Id: Usuarios.length + 1, 
        Nombre,
        Email,
        Pass,
    }; 

    const usuarioExistente = Usuarios.find(usuario => usuario.Id === nuevoUsuario.Id || usuario.Email === nuevoUsuario.Email)

    if (usuarioExistente) {
        return res.status(400).send("El usuario ya existe")
    }

    Usuarios.push(nuevoUsuario)

    fs.writeFileSync(usuariosFilePath, JSON.stringify(Usuarios, null, 2))

    res.send("Usuario agregado correctamente")

})


//Con el parametro de un ID de usuario se debe retornar un array con todos los post creados por este usuario
router.get("/buscarCreados/:id", (req, res) => {
    const usuId = req.params.id;
    let postsDelUsuario;

    Usuarios.forEach(usuario => {
        if (usuId == usuario.Id) {
            postsDelUsuario = Posts.filter(post => post.IdUsuario == usuId)
            return res.send(postsDelUsuario)
        }
    })

    if (!postsDelUsuario){
        res.status(400).send("Usuario no encontrado")
    }
    
})

// Buscar las respuestas de un usuario específico otorgando el id
router.get("/respuestasDelUsuario/:usuario", (req,res)=>{

    const usuario = req.params.usuario;
    const arrayRespuestas = ["Búsqueda de respuestas del usuario: " + usuario] 
  
    Posts.forEach((postEscrito) => {
        postEscrito.respuestas.forEach((respuestaDelPost) => {
            if (respuestaDelPost.IdUsuario == usuario){
                arrayRespuestas.push(
                    {"Texto del posteo":postEscrito.Texto, "Respuesta del usuario al posteo":respuestaDelPost.Texto }
                )
            }
        })
    })
  
    res.send(arrayRespuestas)
  })
  

module.exports = router;