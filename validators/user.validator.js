const { check } = require("express-validator");
const { validateResult } = require("../helper/validate.helper");

const validateUser = [
  check("email", "el campo email no puede estar vacio").not().isEmpty(),
  check("email", "esto no es un email").isEmail(),
  check("user", "indique un usuario").not().isEmpty(),
  check("password", "el campo contraseña no puede estar vacio").not().isEmpty(),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

module.exports = {
  validateUser,
};
