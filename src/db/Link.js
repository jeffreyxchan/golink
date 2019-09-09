const { model, Schema } = require("mongoose")

const LinkSchema = new Schema({
	slug: { type: "string", unique: true, required: true },
	destination: { type: "string", required: true }
})

module.exports = model("Link", LinkSchema)
