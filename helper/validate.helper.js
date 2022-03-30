const { validationResult } = require("express-validator");

const validateResult = (req, res, result) => {
  try {
    validationResult(req).throw();
    return result();
  } catch (error) {
    res.status(403);
    res.json({ message: error.array() });
  }
};

module.exports = {
  validateResult,
};
