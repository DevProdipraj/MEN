const express = require("express")
const app = express()
const port = 3000


app.get("/", (req, res, next) => {
    res.send("Hello World")
})
app.get("/profile", (req, res, next) => {
    res.send("Welcome To Profile Page!!")
})
app.get("/about", (req, res, next) => {
    res.send("Welcome To About Page!!")
})
app.get("/contact", (req, res, next) => {
    res.send("Welcome To Contact Page!!")
})

app.listen(port, () => {
    console.log("Server Is Runing ")
})