const express = require("express");
const router = express.Router();

const authRouter = require("./auth.route");
const usersRouter = require("./users.route");
const foldersRouter = require("./folders.route");
const notesRouter = require("./notes.route");
const linesRouter = require("./lines.route");
const webHooksRouter = require("./webhooks.route");
const checkoutRouter = require("./checkout.route");

//================== Routes ======================
router.use("/auth", authRouter);
router.use("/users", usersRouter);
router.use("/folders", foldersRouter);
router.use("/notes", notesRouter);
router.use("/lines", linesRouter);
router.use("/webhooks", webHooksRouter);
router.use("/checkout", checkoutRouter);
//================================================

module.exports = router;
