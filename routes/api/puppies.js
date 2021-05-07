const express = require("express");
const router = express.Router();
const puppiesCtrl = require("../../controllers/api/puppies");

router.get("/", puppiesCtrl.index);
router.get("/:id", puppiesCtrl.show);
router.post("/", puppiesCtrl.create);
router.delete("/:id", puppiesCtrl.delete);
router.put("/:id", puppiesCtrl.update);

module.exports = router;
