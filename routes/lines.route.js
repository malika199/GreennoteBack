const router = require("express").Router();
const verify = require("../jsonWebToken/verifyToken");
const linesController = require("../controllers/linesController");

//CREATE
router.post("/", verify, linesController.create);

//UPDATE
router.put("/:id", verify, linesController.update);

//DELETE
router.delete("/:id", verify, linesController.delete);

//GET
router.get("/find/:id", verify, linesController.get);

//GET ALL
router.get("/", linesController.getAll);

module.exports = router;
