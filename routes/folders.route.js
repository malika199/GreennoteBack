const router = require("express").Router();
const verify = require("../jsonWebToken/verifyToken");
const foldersController = require("../controllers/foldersController");

//CREATE
router.post("/", verify, foldersController.create);

//UPDATE
router.put("/:id", verify, foldersController.update);

//DELETE
router.delete("/:id", verify, foldersController.delete);

//GET
router.get("/find/:id", verify, foldersController.get);

//GET ALL
router.get("/", foldersController.getAll);

module.exports = router;
