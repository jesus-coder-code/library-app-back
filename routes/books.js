const express = require("express");
const books = express.Router();

const {
  getBook,
  createBook,
  updateBook,
} = require("../controllers/books.controller");

books.get("/", getBook);

books.post("/", createBook);

books.put("/", updateBook);

books.delete("/", (req, res) => {
  res.send({ message: "aqui elimino los libros" });
});

module.exports = books;
