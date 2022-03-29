module.exports = (sequelize, type) => {
  return sequelize.define("books", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: type.STRING,
      allowNull: false,
    },
    author: {
      type: type.STRING,
      allowNull: false,
    },
    year_publication: type.INTEGER,
    pages: type.INTEGER,
    condition: {
      type: type.STRING,
      allowNull: false,
    },
  });
};
