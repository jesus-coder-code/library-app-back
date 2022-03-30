const { check } = require("express-validator");
const { validateResult } = require("../helper/validate.helper");

const validateBook = [
  check("name", "por favor indique nombre del libro").not().isEmpty(),
  check("author", "por favor indique nombre del autor").not().isEmpty(),
  check("name", "nombre de libro invalido").isString(),
  check("author", "nombre de autor invalido").isString(),
  check("year", "solo se permiten numeros").isNumeric(),
  check("pages", "solo se permiten numeros").isNumeric(),
  check("condition", "por favor indique el estado del libro").not().isEmpty(),
  (req, res, result) => {
    validateResult(req, res, result);
  },
];

module.exports = {
  validateBook,
};
