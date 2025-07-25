const { body } = require("express-validator");

// Validation rules for creating a new item (strict: all fields required)
const validateCreateItem = [
    body("title")
        .trim()
        .notEmpty().withMessage("Title is required.")
        .isLength({ min: 3 }).withMessage("Title must be at least 3 characters long."),

    body("price")
        .notEmpty().withMessage("Price is required.")
        .isFloat({ gt: 0 }).withMessage("Price must be a number greater than 0."),
];

// Validation rules for updating an item (flexible: allow partial updates)
const validateUpdateItem = [
    body("title")
        .optional()
        .trim()
        .isLength({ min: 3 }).withMessage("Title must be at least 3 characters long."),

    body("price")
        .optional()
        .isFloat({ gt: 0 }).withMessage("Price must be a number greater than 0."),
];

module.exports = { validateCreateItem, validateUpdateItem };
