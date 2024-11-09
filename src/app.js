const express = require("express");
const { connectDB } = require("./config/database");
const User = require("./models/user");
const app = express();

const PORT = 3000;

app.post("/signup", async (req, res, next) => {
  const userObj = {
    firstName: "Kenam",
    lastName: "Verma",
    emailId: "abc@gmail.com",
    password: "Hello@123",
  };
  const user = new User(userObj);
  try {
    await user.save();

    res.send("User added successfully");
  } catch (err) {
    res.status(400).send("Bad Request");
  }
});

connectDB()
  .then(() => {
    console.log("Database connection done!");
    app.listen(PORT, () => {
      console.log("Servre is listening ......");
    });
  })
  .catch((err) => {
    console.log(err);
    console.log("Unsuccessful");
  });
