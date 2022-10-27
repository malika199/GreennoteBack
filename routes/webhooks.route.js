const express = require("express");
const router = express.Router();
const webhooksController = require("../controllers/webhooksController");

router.post("/stripe", webhooksController.stripewebhook);

module.exports = router;
