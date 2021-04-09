// require your server and launch it
// const express = require("express")
// const dotenv = require("dotenv").config()
// const app = require("./api")
// const port = process.env.PORT || 9000
// app.use(express.json())

// app.use("/api/", (_, res) => {
//     res.json({ data: "heylook its an api!" })
// })
// app.listen(port, () => {
//     console.log(`server is listening to ${port}`)
// })
const dotenv = require("dotenv").config()
const express = require("express")
const cors = require("cors")
const app = express()
const port = process.env.PORT || 9000
const path = require("path")
app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, "client/build")))

app.use("/api/", (_, res) => {
    res.json({ data: "API accounted for" })
})


app.listen(port, () => {
    console.log(`Server is alive on port ${port}`)
})