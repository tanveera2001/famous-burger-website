const fs = require("fs");
const path = require("path");
const { errorResponse } = require("../controllers/responseController");

const validateImageUpdate = (req, res, next) => {
  const file = req.file;

  if (!file) {
   // No image file present, which is OK on update, so just pass through
    return next();
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

module.exports = validateImageUpdate;






