var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.json({ success: true, message: "this is a god damn secret" });
});

module.exports = router;
