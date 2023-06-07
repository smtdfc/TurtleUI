const path = require("path")

module.exports = [
	{
		entry:path.join(__dirname,"../../src/js/main.js"),
		mode: "production",
		output: {
			path: path.resolve(__dirname, "../../dist"),
			filename: 'ui.turtle.js'
		}
	}
]