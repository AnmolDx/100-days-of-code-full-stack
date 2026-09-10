const express = require("express")
let app = express()

let port = 3000;

app.listen(port, () => {
    console.log("app is listening on port")
})

// app.use((req, res) => {
//     // console.log(req)
//     console.log("request received")
//     // res.send("this is a basic reponse")
// //     res.send({
// //         name: "anmol",
// //         age: 20

// // })
//     res.send("<h1>This is just a heading</h1>")
// })

app.get("/:username/:id", (req, res) => {
    console.log(req.params)
    res.send("i am root path")
})
// app.get("/apple", (req, res) => {
//     res.send("you contacted apple path")
// })
// app.get("/orange", (req, res) => {
//     res.send("you contacted orange path")
// })

//if route doesnt exist
// app.get("*", (req, res) => {
//     res.send("this path doesnt exist")
// })

app.get("/search", (req, res) => {
    console.log(req.query);
    res.send("no results")
})