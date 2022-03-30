const { validationResult } = require("express-validator");

const validateResult = (req, res) => {
  try {
    validationResult(req).throw();
    return true;
  } catch (error) {
    res.status(403);
    res.json({ message: error.array() });
  }
};

module.exports = {
  validateResult,
};
