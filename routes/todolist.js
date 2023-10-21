const express = require("express");
const router = express.Router();
const todolistController = require("../controllers/todolistController.js");

router.get("/", todolistController.findAll);
router.get("/:id", todolistController.findOne);
router.post("/", todolistController.create);
router.put("/:id", todolistController.update);
router.delete("/:id", todolistController.delete);



module.exports = router;
