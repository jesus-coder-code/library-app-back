const express = require("express");
const books = express.Router();
const { validateBook } = require("../validators/books.validator");
const {
  getBook,
  createBook,
  updateBook,
} = require("../controllers/books.controller");

books.get("/get", getBook);

//del modulo books.controller la ruta la manejará la funcion createBook
books.post("/new", validateBook, createBook);

books.put("/update", updateBook);

books.delete("/", (req, res) => {
  res.send({ message: "aqui elimino los libros" });
});

module.exports = books;
