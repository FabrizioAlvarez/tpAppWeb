const express = require('express')
const router = express.Router()
const path = require('path')
const fs = require('fs')


const PostFilePath = path.join(__dirname, '../json/post.json')
const Posts = JSON.parse(fs.readFileSync(PostFilePath, 'utf-8'))


router.get('/post', (req, res) => {
  res.send('Ruta de posts')
})


// Poder retornar un array con todos los post con sus respuestas
router.get('/listar', (req, res) => {
    res.send(Posts)
})


//Creacion de un post con los parametros necesarios especificados en la expliacacion de la informacion que debe tener un post 
router.post('/nuevoPost', (req,res)=>{
    const {IdUsuario ,Texto, FechaPublicacion, Topicos} = req.body
    const arrayTopicos = Topicos.split(',')

    const nuevoPost = {
        Id: Posts.length + 1,
        IdUsuario,
        Texto,
        FechaPublicacion,
        Topicos : arrayTopicos,
        respuestas: [],
    }

    Posts.push(nuevoPost)

    fs.writeFileSync(PostFilePath, JSON.stringify(Posts, null, 2))

    res.send("Post agregado correctamente")
})


//En base al parametro de un topico, poder retornar un array con todos los post que posean ese topico
router.get("/buscar/:topico", (req, res) => {
    const topicoBuscado = req.params.topico.toLowerCase()

    const postsConTopico = Posts.filter((post) => post.Topicos.includes(topicoBuscado))

    if (postsConTopico.length === 0) {
        return res.status(400).send("<h1>Tópico no encontrado</h1>")
    } else {
        res.send(postsConTopico)
    }
})


//Se debe realizar una peticion para obtener todos los post de un usuario ordenado por fecha. Los parametros deben ser IDusuario y ASC o DESC
router.get('/ordenar/:iduser/:orden', (req, res) => {
    const IdUsuario = req.params.iduser;
    const Orden = req.params.orden.toLowerCase();

    if (!IdUsuario || !Orden) {
        return res.status(400).json({ error: 'Faltan parámetros requeridos.' })
    }

    const postsDelUsuario = Posts.filter(post => post.IdUsuario == IdUsuario)

    if (postsDelUsuario.length === 0) {
        return res.status(404).json({ error: 'No se encontraron posts para el usuario proporcionado.' })
    }

    const fechaPosts = postsDelUsuario.sort((a, b) => {
        const Fecha1 = new Date(a.FechaPublicacion)
        const Fecha2 = new Date(b.FechaPublicacion)

        return Orden === 'asc' ? Fecha1 - Fecha2 : Fecha2 - Fecha1
    })

    res.json(fechaPosts)
})



module.exports = router;