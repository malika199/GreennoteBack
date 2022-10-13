const router = require("express").Router();
const verify = require("../jsonWebToken/verifyToken");
const usersController = require("../controllers/usersController");

//UPDATE
router.put("/:id", verify, usersController.updateUser);

//DELETE
router.delete("/:id", verify, usersController.delete);

//GET
router.get("/find/:id", verify, usersController.getUser);

//GET ALL
router.get("/", usersController.getAllUsers);

module.exports = router;
