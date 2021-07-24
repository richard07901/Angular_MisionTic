const express = require('express');
const cors = require("cors");
const mongoose = require("mongoose");

const Post = require("./models/post");

const app = express();
app.use(cors());

mongoose.connect("mongodb+srv://admin:274vsEbuXa4BDH53@cluster0.ouomr.mongodb.net/mision-blog?retryWrites=true&w=majority",
{useNewUrlParser: true, useUnifiedTopology: true}
)
.then(() => {
  console.log("Estamos conectados a nuestra DB")
})
.catch(() => {
  console.log("Houston tenemos un problema");
})

app.use(express.json());
app.use(express.urlencoded({ extended: false}));


// YA NO ES NECESARIO AL AGREGAR CORS COMO REQUIRE
// app.use((req, res, next) =>{
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Header", "Origin, X-Requested-with, Content-type, Accept");
//   res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS");
//   next();
// })

app.get('/api/post', (req, res) => {
  // const posts = [
  //   {
  //     title: "Primer Post",
  //     summary:"Este es un Post",
  //     content:"FELICITACIONES"
  //   },
  //   {
  //     title: "Segundo Post",
  //     summary:"Este es otro Post",
  //     content:"Nuestro segundo Post desde el servidor"
  //   }
  // ];
  Post.find().then((postResult) => {
    res.status(200).json(postResult);
  })
});

app.post("/api/post", (req, res) =>{
  console.log(req.body);
  const postForAdd = new Post({
    title: req.body.title,
    summary: req.body.summary,
    content: req.body.content,
  });
  postForAdd.save().then((createdPost) => {
    res.status(201).json({
      idPostAdded: createdPost._id
    });
  });
})

app.delete("/api/post/:id", (req, res) => {
  Post.deleteOne({_id:req.params.id}).then((result) =>{
    console.log(result);
    res.status(200).json({message: "Post Eliminado"})
  });
})


module.exports = app;
