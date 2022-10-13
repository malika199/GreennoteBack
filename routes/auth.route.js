const router = require("express").Router();
const authController = require("../controllers/authController");
const verify = require("../jsonWebToken/verifyToken");

//REGISTER
router.post("/register", authController.register);

//LOGIN
router.post("/login", authController.login);

//VERIFY TOKEN
router.get("/verify", verify, authController.verifyToken);

module.exports = router;
