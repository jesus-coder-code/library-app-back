const express = require("express");
const books = express.Router();

const {
  getBook,
  createBook,
  updateBook,
} = require("../controllers/books.controller");

books.get("/", getBook);

//del modulo books.controller la ruta la manejará la funcion createBook
books.post("/", createBook);

books.put("/", updateBook);

books.delete("/", (req, res) => {
  res.send({ message: "aqui elimino los libros" });
});

module.exports = books;
