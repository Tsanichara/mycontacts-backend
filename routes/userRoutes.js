const express = require("express");
const router = express.Router();
const {registerUser, loginUser, getCurrentUserInfo} = require("../controllers/userController");

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/current", getCurrentUserInfo);


module.exports = router;