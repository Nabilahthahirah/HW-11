const express = require("express");
const router = express.Router();
const todolistRouter = require("./todolist.js");

router.use("/todolists", todolistRouter);

module.exports = router;