const express = require("express");
const morgan = require("morgan");
const app = express();
const layout = require("./views/layout.js");
const { db, Page, User } = require("./models");
const wikiRouter = require("./routes/wiki");
// const userRouter = require("./routes/users");

db.authenticate().then(() => {
  console.log("connected to the database");
});

app.use(morgan("dev"));
app.use(express.static("./stylesheets/style.css"));
app.use(express.urlencoded({ extended: true }));
app.use("/wiki", wikiRouter);
// app.use("/user", userRouter);

app.get("/", (req, res, next) => {
  try {
    res.redirect("/wiki");
  } catch (err) {
    next(err);
  }
});

const init = async () => {
  // await Page.sync();
  // await User.sync();
  await db.sync();
  const PORT = 3000;

  app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });
};

init();
