const express = require("express");
const seedItems = require("../controllers/seedController");



const seedRouter = express.Router();

// GET /api/seed
seedRouter.get("/burgers", seedItems);

module.exports = seedRouter;
