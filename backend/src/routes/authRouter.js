const express = require("express");
const {
	login,
	logout,
	signup,
	verifyEmail,
	forgotPassword,
	resetPassword,
	checkAuth,
} = require("../controllers/auth.controller");
const { verifyToken } = require("../middlewares/verifyToken");



const authRouter = express.Router();

authRouter.get("/check-auth", verifyToken, checkAuth);

authRouter.post("/signup", signup);
authRouter.post("/verify-email", verifyEmail);
authRouter.post("/login", login);
authRouter.post("/logout", logout);


authRouter.post("/forgot-password", forgotPassword);

authRouter.post("/reset-password/:token", resetPassword);

module.exports = authRouter;
