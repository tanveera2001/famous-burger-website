const mongoose = require("mongoose");
const { mongodbURL } = require("../secret");



const connectDatabase = async (options) => {
    try {
        await mongoose.connect(mongodbURL, options);
        console.log("Successfully connected to the MongoDB database.");
        mongoose.connection.on("error", (error) => {
            console.error("Runtime MongoDB connection error:", error.toString());
        });
    } catch (error) {
        console.error("Failed to connect to the MongoDB database:", error.toString());
    }
};

module.exports = connectDatabase;