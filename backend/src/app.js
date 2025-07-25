const express = require("express");
const morgan = require("morgan");
const customCors = require("./config/cors");
const { nodeEnv } = require("./secret");
const path = require("path");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const notFoundHandler = require("./middlewares/notFoundHandler");
const globalErrorHandler = require("./middlewares/globalErrorHandler");
const multerErrorHandler = require("./middlewares/multerErrorHandler");

// ✅ Converted import to require:
const authRoutes = require("./routes/auth.route");

const app = express();


// Middlewares
app.use(customCors);
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json()); // allows us to parse incoming requests:req.body
app.use(cookieParser()); // allows us to parse incoming cookies

// Serve static files
app.use(express.static(path.join(__dirname, '..', 'public')));

// Routes
app.use("/api/auth", authRoutes);

// Serve frontend in production
if (nodeEnv === "production") {
	app.use(express.static(path.join(__dirname, "/frontend/dist")));

	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
	});
}

// 404 handler
app.use(notFoundHandler);

// Multer or custom middleware error handler (file size, file type)
app.use(multerErrorHandler);

// Global fallback error handler
app.use(globalErrorHandler);

module.exports = app;
