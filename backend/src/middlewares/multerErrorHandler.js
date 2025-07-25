const { errorResponse } = require("../controllers/responseController");

const multerErrorHandler = (err, req, res, next) => {
  if (err.code === "LIMIT_FILE_SIZE") {
    return errorResponse(res, {
      statusCode: 422,
      message: "Image must not exceed 1MB in size.",
    });
  }

  if (err.code === "LIMIT_UNEXPECTED_FILE") {
    return errorResponse(res, {
      statusCode: 422,
      message: "Unexpected file field. Please use the correct field name.",
    });
  }

  // Pass other errors to the global handler
  return next(err);
};

module.exports = multerErrorHandler;
