const { Book } = require("../db/database");

const getBook = async (req, res) => {
  const book = await Book.findAll();
  res.json(book);
};

const createBook = async (req, res) => {
  try {
    await Book.create(req.body);
    res.json({ message: "libro registrado" });
  } catch (error) {
    res.json({ message: error });
  }
};

const updateBook = (req, res) => {
  res.json({ message: "update libros" });
};

module.exports = {
  getBook,
  createBook,
  updateBook,
};
