// routes/authRoutes.js
const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/authController");
const { getCurrentUser } = require("../controllers/authController");
const auth = require("../middleware/authMiddleware");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/me", auth, getCurrentUser); // GET /api/auth/me

module.exports = router;
