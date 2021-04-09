// require your server and launch it
const express = require("express")
const dotenv = require("dotenv").config()
const server = require("./api/server.js")
const port = process.env.PORT || 9000
server.use(express.json())

server.use("/api?", (_, res) => {
    res.json({ data: "heylook its an api!" })
})
server.listen(port, () => {
    console.log(`server is listening to ${port}`)
})