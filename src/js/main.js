import * as Components from "./Components.js"
import * as Actions from "./Actions.js"
if (!Turtle || !window.Turtle) {
	throw "Turtle UI cannot find Turtle Core ! "
}
const VERSION = "0.0.1"

window.Turtle.UI ={
	version:VERSION,
	Components,
	Actions
}