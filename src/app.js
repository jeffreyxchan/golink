const express = require("express")
const morgan = require("morgan")
const path = require("path")
const bodyParser = require("body-parser")

const db = require("./db")
const { SERVICE_PORT } = require("./config")
const linkRouter = require("./routes/link")

const app = express()

// Use the morgan logging package with its "common" setting.
app.use(morgan("common"))

// Use body-parser module to parse JSON request bodies.
app.use(bodyParser.json())

// Configure static file serving to point at static directory.
app.use(express.static(path.join(__dirname, "static")))

app.use(linkRouter)

app.listen(SERVICE_PORT, () => console.log(`Server running on port ${SERVICE_PORT}`))
