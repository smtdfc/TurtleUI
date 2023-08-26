const path = require("path")

module.exports = [
	{
		entry:path.join(__dirname,"../../src/js/turtleui.js"),
		mode: "production",
		output: {
			path: path.resolve(__dirname, "../../dist"),
			filename: 'turtleui.min.js'
		}
	}
]