// The config module is responsible for exporting a set of config variables.

if (process.env.NODE_ENV === "production" || process.env.NODE_ENV === "test") {
	module.exports = {
		DB_URI: process.env.DB_URI,
		SERVICE_PORT: process.env.SERVICE_PORT,
		PROXY_PATH: process.env.PROXY_PATH
	}
} else {
	module.exports = require("./dev.json")
}
