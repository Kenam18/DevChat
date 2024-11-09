const express = require("express");

const app = express();

const PORT = 3000;

app.use("/test",(req,res)=>{
    res.send("Hello frm Test")
})
app.use("/helloworld",(req,res)=>{
    res.send("Hello frm hello")
})
app.use("/",(req,res)=>{
    res.send("Hello frm Server")
})

app.listen(PORT, () => {
  console.log("Servre is listening ......");
});
