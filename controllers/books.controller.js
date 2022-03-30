const { Book } = require("../db/database");

const getBook = async (req, res) => {
  const book = await Book.findAll();
  res.json(book);
};

/*const getBookName = async (req, res) => {
  try {
    const book_name = await Book.findAll({ where: { name: req.params.name } });
    res.json(book_name);
  } catch (error) {
    console.log(error);
  }
};

const getBookAuthor = async (req, res) => {
  try {
    const book_author = await Book.findAll({
      where: { author: req.params.author },
    });
    res.json(book_author);
  } catch (error) {
    console.log(error);
  }
};*/

const createBook = async (req, res) => {
  try {
    await Book.create(req.body);
    res.json({ message: "libro registrado" });
  } catch (error) {
    res.json({ message: error });
  }
};

const updateBook = async (req, res) => {
  try {
    await Book.update(req.body, { where: { id: req.params.id } });
    res.json({ message: "libro actualizado" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getBook,
  /*getBookName,
  getBookAuthor,*/
  createBook,
  updateBook,
};
