
const router = require("express").Router();
// const verify = require("../jsonwebtoken/verifyToken");
const notesController = require("../controllers/notesController")

//CREATE
router.post("/", 
// verify, 
notesController.create);

//UPDATE
router.put("/:id", 
// verify, 
notesController.update);

//DELETE
router.delete("/:id", 
// verify, 
notesController.delete);

//GET
router.get("/find/:id", 
// verify, 
notesController.get);

//GET ALL
router.get("/", notesController.getAll);

module.exports = router;
