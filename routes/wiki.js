const router = require("express").Router();
const { addPage } = require("../views");
const layout = require("../views/layout.js");

router.get("/", (req, res, next) => {
  res.send(layout());
});

router.post("/", (req, res, next) => {
  res.json(req.body);

  // res.send("got to POST/wiki/");
});

router.get("/add", (req, res, next) => {
  res.send(addPage());
});

module.exports = router;
