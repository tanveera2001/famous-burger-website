const fs = require("fs");
const path = require("path");
const { errorResponse } = require("../controllers/responseController");

const validateImageCreate = (req, res, next) => {
  const file = req.file;

  if (!file) {
    return errorResponse(res, {
      statusCode: 400,
      message: "Image file is required.",
    });
  }

  const allowedMimeTypes = ["image/jpeg", "image/png", "image/jpg"];
  const allowedExtensions = [".jpeg", ".png", ".jpg"];
  const ext = path.extname(file.originalname).toLowerCase();

  if (
    !allowedMimeTypes.includes(file.mimetype) ||
    !allowedExtensions.includes(ext)
  ) {
    // ❗ Delete unsafe file from disk
    fs.unlink(file.path, (err) => {
      if (err) console.error("Failed to delete invalid file:", err);
    });

    return errorResponse(res, {
      statusCode: 422,
      message: "Only JPG, JPEG, or PNG images are allowed.",
    });
  }

  next(); // File is valid
};

module.exports = validateImageCreate;






