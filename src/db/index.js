// When this module is included, a persistent connection to the remote Mongo
// databsae will be established.
const mongoose = require("mongoose")
const { DB_URI } = require("../config")

// successfulConnectionMessage is logged on successful connection to the database.
const successfulConnectionMessage = "Successfully connected to the database!"

mongoose.connect(DB_URI)

mongoose.Promise = global.Promise

mongoose.connection.on("error", err => {
	conosle.log("Mongoose error: ", err)
})

mongoose.connection.once("open", () => console.log(successfulConnectionMessage))

module.exports = {
	Link: require("./Link.js")
}
