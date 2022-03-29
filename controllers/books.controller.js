const { Book } = require("../db/database");

const getBook = async (req, res) => {
  const book = await Book.findAll();
  res.json(book);
};

const createBook = async (req, res) => {
  await Book.create(req.body);
  res.json({ message: "libro registrado" });
};

const updateBook = (req, res) => {
  res.json({ message: "update libros" });
};

module.exports = {
  getBook,
  createBook,
  updateBook,
};
