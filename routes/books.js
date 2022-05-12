const express = require("express");
const books = express.Router();
const { validateBook } = require("../middlewares/validators/books.validator");
const {
  getBook,
  createBook,
  updateBook,
  getBookName,
  getBookAuthor,
} = require("../controllers/books.controller");
const { checkToken } = require("../middlewares/jwt/checkToken");

books.get("/get", getBook);
books.get("/get/:name", getBookName);
books.get("/get/:author", getBookAuthor);

//del modulo books.controller la ruta la manejará la funcion createBook
books.post("/new", checkToken, validateBook, createBook);

books.put("/update/:id", checkToken, validateBook, updateBook);

books.delete("/", (req, res) => {
  res.send({ message: "aqui elimino los libros" });
});

module.exports = books;
