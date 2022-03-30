const { check } = require("express-validator");
const { validateResult } = require("../helper/validate.helper");

const validateBook = [
  check("name", "por favor indique nombre del libro").not().isEmpty(),
  check("author", "por favor indique nombre del autor").not().isEmpty(),
  check("year", "solo se permiten numeros").isNumeric(),
  check("pages", "solo se permiten numeros").isNumeric(),
  check("condition", "por favor indique el estado del libro").not().isEmpty(),
  (req, res) => {
    validateResult(req, res);
  },
];

module.exports = {
  validateBook,
};
