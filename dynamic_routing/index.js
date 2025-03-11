const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res, next) => {
    res.send("Hello World")
})
app.get("/:userName", (req, res, next) => {
    const {userName} = req.params
    res.send(`UserName : ${userName}`)
})
app.get("/:userName/:userAge", (req, res, next) => {
    const {userName, userAge} = req.params
    res.send(`UserName : ${userName }  <br>  UserAge : ${userAge}`)
})

app.listen(port, () => {
    console.log("Server Is Runing!!")
})
 