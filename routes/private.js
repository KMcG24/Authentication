var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.json({ success: true, message: "this should be a secret" });
});

module.exports = router;
