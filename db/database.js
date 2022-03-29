const Sequelize = require("sequelize");
const bookModel = require("../models/book.model");

const sequelize = new Sequelize("jesus_api_library", "jesus", "51246380", {
  host: "mysql-jesus.alwaysdata.net",
  dialect: "mysql",
});

const Book = bookModel(sequelize, Sequelize);

sequelize.sync({ force: true }).then(() => {
  console.log("conectado");
});

module.exports = {
  Book,
};
