const express = require('express');
const router = express.Router();

const Usuarios = [
    {
        Id:1,
        Nombre:"Boldini",
        Email:"boldini@boldini",
        Pass:"3333"
    },
    {
        Id:2,
        Nombre:"Mansilla",
        Email:"mansi@mansi",
        Pass:"5555"
    },
    {
        Id:3,
        Nombre:"Alvarez",
        Email:"alva@alva",
        Pass:"7777"
    },
    {
      Id:4,
      Nombre:"Magaquian",
      Email:"magaquian@magaquian",
      Pass:"2222"
    },
    {
      Id:5,
      Nombre:"Carrizo",
      Email:"carrizo@carrizo",
      Pass:"8888"
    } 
]


const Posts = [
    {
        Id: 1,
        IdUsuario: 2,
        Texto: "Programación en JavaScript",
        FechaPublicacion: new Date("2023-10-15"),
        Topicos: ["programación", "lenguajes"],
        respuestas: [
            {
                IdUsuario: 3,
                Texto: "Sí, JavaScript es genial para desarrollo web.",
                FechaPublicacion: new Date("2023-10-16"),
            },
            {
                IdUsuario: 4,
                Texto: "¿Alguien tiene recomendaciones de libros sobre JavaScript?",
                FechaPublicacion: new Date("2023-10-18"),
            },
            {
                IdUsuario: 5,
                Texto: "Me gusta más TypeScript, ¿alguien más lo usa?",
                FechaPublicacion: new Date("2023-10-20"),
            },
        ],
    },
    {
        Id: 2,
        IdUsuario: 2,
        Texto: "Programación en JavaScript",
        FechaPublicacion: new Date("2023-10-15"),
        Topicos: ["programación", "lenguajes"],
        respuestas: [
          {
            IdUsuario: 3,
            Texto: "Sí, JavaScript es genial para desarrollo web.",
            FechaPublicacion: new Date("2023-10-16"),
          },
          {
            IdUsuario: 2,
            Texto: "¿Alguien tiene recomendaciones de libros sobre JavaScript?",
            FechaPublicacion: new Date("2023-10-18"),
          },
          {
            IdUsuario: 5,
            Texto: "Me gusta más TypeScript, ¿alguien más lo usa?",
            FechaPublicacion: new Date("2023-10-20"),
          },
        ],
      },
      {
        Id: 3,
        IdUsuario: 3,
        Texto: "Desarrollo en Python",
        FechaPublicacion: new Date("2023-09-20"),
        Topicos: ["programación", "lenguajes"],
        respuestas: [
          {
            IdUsuario: 2,
            Texto: "Python es ideal para machine learning.",
            FechaPublicacion: new Date("2023-09-21"),
          },
          {
            IdUsuario: 5,
            Texto: "¿Cuál es tu framework favorito para desarrollo web con Python?",
            FechaPublicacion: new Date("2023-09-22"),
          },
        ],
      },
      {
        Id: 4,
        IdUsuario: 4,
        Texto: "Desarrollo en C#",
        FechaPublicacion: new Date("2023-08-12"),
        Topicos: ["programación", "lenguajes"],
        respuestas: [
          {
            IdUsuario: 1,
            Texto: "C# es poderoso para aplicaciones de escritorio.",
            FechaPublicacion: new Date("2023-08-13"),
          },
          {
            IdUsuario: 3,
            Texto: "¿Cuáles son las novedades en C# 9?",
            FechaPublicacion: new Date("2023-08-14"),
          },
        ],
      },
      {
        Id: 5,
        IdUsuario: 5,
        Texto: "Programación en Ruby",
        FechaPublicacion: new Date("2023-07-05"),
        Topicos: ["programación", "lenguajes"],
        respuestas: [
          {
            IdUsuario: 2,
            Texto: "Ruby on Rails facilita el desarrollo web.",
            FechaPublicacion: new Date("2023-07-06"),
          },
          {
            IdUsuario: 4,
            Texto: "¿Cuál es tu gema favorita en Ruby?",
            FechaPublicacion: new Date("2023-07-07"),
          },
        ],
      },
      {
        Id: 6,
        IdUsuario: 1,
        Texto: "Desarrollo en PHP",
        FechaPublicacion: new Date("2023-06-01"),
        Topicos: ["programación", "lenguajes"],
        respuestas: [
          {
            IdUsuario: 3,
            Texto: "PHP es popular para desarrollo web dinámico.",
            FechaPublicacion: new Date("2023-06-02"),
          },
          {
            IdUsuario: 5,
            Texto: "¿Cuáles son las mejores prácticas de seguridad en PHP?",
            FechaPublicacion: new Date("2023-06-03"),
          },
        ],
      },
      {
        Id: 7,
        IdUsuario: 2,
        Texto: "Desarrollo en Swift",
        FechaPublicacion: new Date("2023-05-12"),
        Topicos: ["programación", "lenguajes"],
        respuestas: [
          {
            IdUsuario: 4,
            Texto: "Swift es esencial para el desarrollo de aplicaciones iOS.",
            FechaPublicacion: new Date("2023-05-13"),
          },
          {
            IdUsuario: 5,
            Texto: "¿Cuál es tu experiencia con SwiftUI?",
            FechaPublicacion: new Date("2023-05-14"),
          },
        ],
      },
      {
        Id: 8,
        IdUsuario: 3,
        Texto: "Desarrollo en Kotlin",
        FechaPublicacion: new Date("2023-04-05"),
        Topicos: ["programación", "lenguajes"],
        respuestas: [
          {
            IdUsuario: 1,
            Texto: "Kotlin es una excelente elección para desarrollo Android.",
            FechaPublicacion: new Date("2023-04-06"),
          },
          {
            IdUsuario: 4,
            Texto: "¿Cuáles son las ventajas de Kotlin frente a Java?",
            FechaPublicacion: new Date("2023-04-07"),
          },
        ],
      },
      {
        Id: 9,
        IdUsuario: 4,
        Texto: "Desarrollo en Go",
        FechaPublicacion: new Date("2023-03-01"),
        Topicos: ["programación", "lenguajes"],
        respuestas: [
          {
            IdUsuario: "2",
            Texto: "Go es eficiente y fácil de aprender.",
            FechaPublicacion: new Date("2023-03-02"),
          },
          {
            IdUsuario: "3",
            Texto: "¿Cuáles son los proyectos populares en Go?",
            FechaPublicacion: new Date("2023-03-03"),
          },
        ],
      },
      {
        Id: 10,
        IdUsuario: 1,
        Texto: "Desarrollo en TypeScript",
        FechaPublicacion: new Date("2023-02-15"),
        Topicos: ["programación", "lenguajes"],
        respuestas: [
          {
            IdUsuario: "5",
            Texto: "TypeScript mejora la productividad en proyectos grandes.",
            FechaPublicacion: new Date("2023-02-16"),
          },
          {
            IdUsuario: "2",
            Texto: "¿Cuál es tu experiencia con los tipos estáticos?",
            FechaPublicacion: new Date("2023-02-17"),
          },
        ],
      }
]

//Autentificacion de usuario retornando su ID, nombre y Email. En caso contrario su codigo de respuesta correspondiente.
router.get("/usuarios/login/:email/:contra",(req,res) =>{
    const usu = req.params.email
    const pass = req.params.contra

    Usuarios.forEach(usuario => {
        if(usu == usuario.Email && pass == usuario.Pass){
            return res.send(`<h1>Se entro correctamente <br></h1> <p>El id del usuario es ${usuario.Id} ,su nombre es ${usuario.Nombre} y su email es ${usuario.Email}<p>`)     
        }
    });
        res.status(400).send("<h1>No hay usuarios con los parametros ingresados</h1>")
    
})


//Creacion de usuarios con los parametros necesarios.
router.post('/usuarios/nuevoUser', (req,res)=>{
    const { Nombre, Email, Pass } = req.body; 

    const nuevoUser = {
        Id: Usuarios.length + 1, 
        Nombre,
        Email,
        Pass,
    };
    Usuarios.push(nuevoUser); 

    res.send(Usuarios)
})


//Con el parametro de un ID de usuario se debe retornar un array con todos los post creados por este usuario
router.get("/usuarios/buscar/:id", (req, res) => {
    const usuId = req.params.id;
    let postsDelUsuario;

    Usuarios.forEach(usuario => {
        if (usuId == usuario.Id) {
            postsDelUsuario = Posts.filter(post => post.IdUsuario == usuId);
            return res.send(postsDelUsuario);
        }
    });
    res.status(400).send("Usuario no encontrado");
});


// Buscar las respuestas de un usuario específico otorgando el id
router.get("/posts/respuestas/buscar/:usuario", (req,res)=>{

    const usuario = req.params.usuario;
    const arrayConRespuestas = ["Búsqueda de respuestas del usuario: " + usuario] // array vacío para guardar las respuestas

    Posts.forEach((postEscrito) => {
        postEscrito.respuestas.forEach((respuestaDelPost) => {
            if (respuestaDelPost.IdUsuario == usuario){
                arrayConRespuestas.push(
                    {"Texto del posteo":postEscrito.Texto, "Respuesta del usuario al posteo":respuestaDelPost.Texto }
                )
            }

        });
    });

    res.send(arrayConRespuestas)


})


//Creacion de un post con los parametros necesarios especificados en la expliacacion de la informacion que debe tener un post 
router.post('/posts/nuevoPosts', (req,res)=>{
    const {IdUsuario ,Texto, FechaPublicacion, Topicos, respuestas} = req.body; 

    const nuevoPosts = {
        Id: Posts.length + 1, 
        IdUsuario, 
        Texto,
        FechaPublicacion,
        Topicos,
        respuestas

    };
    Posts.push(nuevoPosts); 

    res.send(Posts)
})


router.get('/posts/listar', (req, res) => {
    // Poder retornar un array con todos los post con sus respuestas
    res.send(Posts);
});


//En base al parametro de un topico, poder retornar un array con todos los post que posean ese topico
router.get("/posts/buscar/:topico", (req, res) => {
    const topicoBuscado = req.params.topico;
    const postsConTopico = Posts.filter((post) => post.Topicos == topicoBuscado);

    if (postsConTopico.length === 0) {
        return res.status(400).send("Topico no encontrado");
    }

    res.send(postsConTopico);
});



//Se debe realizar una peticion para obtener todos los post de un usuario ordenado por fecha. Los parametros deben ser IDusuario y ASC o DESC
router.get('/posts/fecha/:iduser/:orden', (req, res) => {
    const Idusu = parseInt(req.params.iduser)
    const Orden = req.params.orden

    if (!Idusu || !Orden) {
        return res.status(400).send( 'Faltan parámetros requeridos.');
    }

    const postsUsu = Posts.filter(post => post.IdUsuario === Idusu);

    if (postsUsu.length === 0) {
        return res.status(404).json({ error:'No se encontraron posts para el usuario proporcionado.' });
    }

    const fechaPosts = postsUsu.sort((a, b) => {
        const Fecha1 = a.FechaPublicacion;
        const Fecha2 = b.FechaPublicacion;

        return Orden === 'ASC' ? Fecha1 - Fecha2 : Fecha2 - Fecha1;
    });

    res.json(fechaPosts);
});



module.exports = router;
