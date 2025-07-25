const { errorResponse } = require("../controllers/responseController");

const globalErrorHandler = (err, req, res, next) => {
  return errorResponse(res, {
    statusCode: err.status,
    message: err.message,
  });
};

module.exports = globalErrorHandler;



