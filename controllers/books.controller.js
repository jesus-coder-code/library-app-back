const getBook = (req, res) => {
  res.json({ message: "get libros" });
};

const createBook = (req, res) => {
  try {
    res.json({ message: "post libros" });
  } catch (error) {
    console.log(error);
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
