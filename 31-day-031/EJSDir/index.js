const express = require("express")
const app = express()
const path = require("path")

const port = 8080;

app.set("view engine", "ejs")

// app.get("/", (req, res) => {
//     res.send("this is root")
// } )

app.set("views", path.join(__dirname, "/views"))

app.get("/", (req, res) => {
    res.render("home.ejs")
})
app.get("/rolldice", (req, res) => {
    let diceVal =  Math.floor(Math.random()*6)+1
    res.render("rolldice.ejs", {diceVal: diceVal})
})
app.get("/ig/:username", (req, res) => {
    // const followers = ["nitin", "manish", "rahul", "aahan", "sahil"]
    let {username} = req.params
    const randomData = require("./randomData.json")
    const data = randomData[username]
    console.log(data)
    res.render("instagram.ejs", {data})
})

app.listen(port, () => {
    console.log("Listening on port")
})