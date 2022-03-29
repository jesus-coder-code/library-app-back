module.exports = (sequelize, type) => {
  return sequelize.define("books", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: type.STRING,
    },
    author: {
      type: type.STRING,
    },
    year: type.STRING,
    pages: type.STRING,
    condition: {
      type: type.STRING,
    },
  });
};
