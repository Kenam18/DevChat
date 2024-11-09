const express = require("express");

const app = express();

const PORT = 3000;

app.use("/test", (req, res) => {
  res.send("Hello frm Test");
});

app.get("/user", (req, res) => {
  res.send({
    firstName: "Kenam",
    lastName: "Verma",
  });
});

app.post("/user", (req, res) => {
  res.send("Data successfully entered!");
});
app.listen(PORT, () => {
  console.log("Servre is listening ......");
});
