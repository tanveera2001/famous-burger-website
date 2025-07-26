const express = require("express");
const { handleCreateItem, handleGetAllItems, handleUpdateItem, handleDeleteItem, handleGetItemById } = require("../controllers/itemController");
const upload = require("../middlewares/uploadFile");
const { validateCreateItem, validateUpdateItem } = require("../validators/itemValidator");

const handleValidationResult = require("../middlewares/handleValidationResult");
const validateImageUpdate = require("../middlewares/validateImageUpdate");
const validateImageCreate = require("../middlewares/validateImageCreate");


const itemRouter = express.Router();

// POST: /api/items/create
itemRouter.post(
  "/create-item",
  upload.single("image"),     // 🚉 1st Stop: Upload image
  validateImageCreate,              // 🚉 2nd Stop: Check image type
  validateCreateItem,         // 🚉 3rd Stop: Check title, price
  handleValidationResult,     // 🚉 4th Stop: Check for errors
  handleCreateItem           // 🎯 Final Stop: Save item!
);

// GET: /api/items
itemRouter.get("/", handleGetAllItems);

// GET: /api/items/:id
itemRouter.get("/:id", handleGetItemById);

// PATCH: /api/items/:id  (Update item by ID)
itemRouter.patch(
  "/:id", 
  upload.single("image"), 
  validateImageUpdate, 
  validateUpdateItem, 
  handleValidationResult,
  handleUpdateItem);

// DELETE: /api/items/:id  (Delete item by ID)
itemRouter.delete("/:id", handleDeleteItem);

module.exports = itemRouter;
