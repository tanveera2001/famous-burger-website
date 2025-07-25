const createError = require("http-errors");

const notFoundHandler = (req, res, next) => {
  next(createError(404, "Oops! This route does not exist. Please check the URL and try again."));
};

module.exports = notFoundHandler;



