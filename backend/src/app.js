
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const cookieParser = require("cookie-parser");

const customCors = require("./config/cors");
const { nodeEnv } = require("./secret");

const notFoundHandler = require("./middlewares/notFoundHandler");
const globalErrorHandler = require("./middlewares/globalErrorHandler");
const multerErrorHandler = require("./middlewares/multerErrorHandler");

const authRouter = require("./routes/authRouter");
const itemRouter = require("./routes/itemRouter");







const app = express();


// Global Middlewares
app.use(customCors);
app.use(morgan("dev"));
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
app.use(cookieParser());


// 📁 Public Static Files
app.use(express.static(path.join(__dirname, "..", "public")));


// API Routes
app.use("/api/auth", authRouter);
app.use("/api/items", itemRouter);


// Frontend in Production
if (nodeEnv === "production") {
	app.use(express.static(path.join(__dirname, "frontend", "dist")));

	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
	});
}

// Error Handlers
app.use(notFoundHandler);        // 404 Not Found
app.use(multerErrorHandler);    // File Upload Errors
app.use(globalErrorHandler);    // Fallback Error Handler


// Export App
module.exports = app;
