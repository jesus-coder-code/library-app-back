const express = require("express");
const books = express.Router();
const { validateBook } = require("../validators/books.validator");
const {
  getBook,
  createBook,
  updateBook,
  getBookName,
  getBookAuthor,
} = require("../controllers/books.controller");

books.get("/get", getBook);
books.get("/get/:name", getBookName);
books.get("/get/:author", getBookAuthor);

//del modulo books.controller la ruta la manejará la funcion createBook
books.post("/new", validateBook, createBook);

books.put("/update/:id", validateBook, updateBook);

books.delete("/", (req, res) => {
  res.send({ message: "aqui elimino los libros" });
});

module.exports = books;
