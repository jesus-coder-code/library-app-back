const { check } = require("express-validator");
const { validateResult } = require("../helper/validate.helper");

const validateUser = [
  check("email", "ingrese un email valido").isEmail(),
  check("email", "el campo email no puede estar vacio").not().isEmpty(),
  check("user", "por favor indique su nombre de usuario").not().isEmpty(),
  check("password", "por favor indique una contraseña").not().isEmpty(),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

module.exports = {
  validateUser,
};
//a
