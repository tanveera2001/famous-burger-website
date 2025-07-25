const { validationResult } = require("express-validator");
const { errorResponse } = require("../controllers/responseController");

const handleValidationResult = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return errorResponse(res, {
      statusCode: 422,
      message: "Validation failed.",
      errors: errors.array(), 
    });
  }
  next();
};

module.exports = handleValidationResult;
