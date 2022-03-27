const express = require("express");
const books = express.Router();

books.get("/", (req, res) => {
  res.send({ message: "aqui muestro los libros" });
});

books.post("/", (req, res) => {
  res.send({ message: "aqui creo registros de libros" });
});

books.put("/", (req, res) => {
  res.send({ message: "aqui modifico los registros de libros" });
});

books.delete("/", (req, res) => {
  res.send({ message: "aqui elimino los libros" });
});

module.exports = books;
