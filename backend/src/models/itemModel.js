const { Schema, model } = require("mongoose");

// Schema for burger items
const itemSchema = new Schema(
   {
    title: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
  },
  { timestamps: true } 

);

const Item = model("Item", itemSchema);
module.exports = Item;
