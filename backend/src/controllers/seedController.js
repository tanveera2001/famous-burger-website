const data = require("../data");
const Item = require("../models/itemModel");


// Seed the database
 const seedItems = async (req, res) => {
  try {
    // Optional: clear existing items
    await Item.deleteMany();

    // Insert new items from data.js
    const createdItems = await Item.insertMany(data.burgers);

    res.status(201).json({
      message: "Database seeded successfully",
      count: createdItems.length,
      items: createdItems,
    });
  } catch (error) {
    console.error("Seeding error:", error);
    res.status(500).json({ message: "Seeding failed", error });
  }
};

module.exports = seedItems;
