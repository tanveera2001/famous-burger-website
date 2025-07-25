const Item = require("../models/itemModel");
const createError = require("http-errors");
const { successResponse, errorResponse } = require("./responseController");
const fs = require("fs").promises;
const path = require("path");



// Controller to handle creation of a new item
const handleCreateItem = async (req, res, next) => {
  try {
    const title = req.body.title;
    const price = req.body.price;

    const existingItem = await Item.findOne({
      title: { $regex: `^${title}$`, $options: "i" }
    });

    if (existingItem) {
      return errorResponse(res, {
        statusCode: 409,
        message: "A burger with this name already exists.",
      });
    }

    // Create a new item with the provided data
    const newItem = await Item.create({
      title: title,
      price: price,
      image: req.file.path.replace(/\\/g, "/").replace("public/", ""),
    });

    // Send a success response with the created item details
    return successResponse(res, {
      statusCode: 200,
      message: "Item was created successfully.",
      payload: { newItem },
    });

  } catch (error) {
    next(error);
  }
};



// Controller to handle the request for fetching all items from the database.
const handleGetAllItems = async (req, res, next) => {
  try {
    // Fetch all items from the database without any filter
    const items = await Item.find({}, "title price image");

    // Send a success response with status 200 and the retrieved items
    return successResponse(res, {
      statusCode: 200,
      message: "All items have been retrieved successfully.",
      payload: { items },
    });
  } catch (error) {
    next(error);
  }
};

const handleGetItemById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const item = await Item.findById(id);
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.json({ payload: item });
  } catch (error) {
    next(error);
  }
};


// Controller to update an existing item by its ID
const handleUpdateItem = async (req, res, next) => {
  try {
    const { id: itemId } = req.params;

    // Check if the item exists
    const existingItem = await Item.findById(itemId);
    if (!existingItem) {
      throw createError(404, "Item not found");
    }


    // 🔍 Duplicate title check (exclude current item)
    if (req.body.title) {
      const duplicateItem = await Item.findOne({
        title: { $regex: `^${req.body.title}$`, $options: "i" },
        _id: { $ne: itemId }, // ⛔ Exclude the current item
      });

      if (duplicateItem) {
        return errorResponse(res, {
          statusCode: 409,
          message: "A burger with this name already exists.",
        });
      }
    }
    // Build the update payload from req.body
    const updatePayload = {};
    if (req.body.title) updatePayload.title = req.body.title;
    if (req.body.price) updatePayload.price = req.body.price;

    // Handle new image upload and delete old one
    if (req.file) {
      if (existingItem.image) {
        const oldImagePath = path.join(__dirname, "..", "public", existingItem.image);
        try {
          await fs.unlink(oldImagePath);
        } catch (err) {
          console.error("Failed to delete old image:", err);
        }
      }
      updatePayload.image = `images/burgers/${req.file.filename}`;
    }

    // Update the item
    const updatedItem = await Item.findByIdAndUpdate(itemId, updatePayload, {
      new: true,
      runValidators: true,
      context: "query",
    });

    // Respond with success
    return successResponse(res, {
      statusCode: 200,
      message: "Item updated successfully.",
      payload: { updatedItem },
    });
  } catch (error) {
    next(error);
  }
};


// Controller to handle deleting an item by its ID.
const handleDeleteItem = async (req, res, next) => {
  try {
    // Extract the item ID from the request parameters
    const { id: itemId } = req.params;

    // Find the item by ID to check if it exists in the database
    const existingItem = await Item.findById(itemId);
    if (!existingItem) {
      return errorResponse(res, {
        statusCode: 404,
        message: "Item not found.",
      });
    }


    // Delete the item from the database by its ID
    await Item.findByIdAndDelete(itemId);

    // Send a success response confirming the item was deleted
    return successResponse(res, {
      statusCode: 200,
      message: "Item was deleted successfully.",
    });

  } catch (error) {
    next(error);
  }
};





module.exports = { handleGetAllItems, handleCreateItem, handleUpdateItem, handleDeleteItem, handleGetItemById };
