const express = require("express");
const path = require("path");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// app.get("/", function (req, res) {
//   console.log(req);
//   res.send("<h1>Hello World!!</h1>");
// });

app.post("/api/v1/quiz", function (req, res) {
  const answer = req.body.answer;
  if (answer === "フライパン") {
    // res.send("<h1>正解！！</h1>");
    res.redirect("/correct.html");
  } else {
    // res.send("<h1>不正解...</h1>");
    res.redirect("/wrong.html");
  }
});

app.get("/about", function (req, res) {
  res.send("About");
});

app.listen(5000, function () {
  console.log("I am running!!");
});
