import * as components from "./Components/index.js"

window.TurtleUI_BuildIn = {}
const COMPONENTS = {
	"accordion": components.Accordion,
	"navbar": components.Navbar,
	"navbarContainer": components.NavbarContainer,
	"offcanvas": components.Offcanvas,
	"sidebar": components.Sidebar,
	"modal": components.Modal,
	"tab": components.Tab,
	"bottomSheet": components.BottomSheet

}

const ACT_EVENTS = {
	"click": ["tToggle", "tOpen"]
}

function triggerAction(act_name, target, data) {
	let component_type = data[act_name]
	if (!COMPONENTS[component_type]) return
	if (!COMPONENTS[component_type].actions[`${act_name}`]) return
	COMPONENTS[component_type].actions[`${act_name}`](target, data)
}

Object.keys(ACT_EVENTS).forEach(e => {
	window.addEventListener(e, function(event) {
		let target = event.target
		let data = target.dataset

		ACT_EVENTS[e].forEach((act_name) => {
			if (!data[act_name]) return
			triggerAction(act_name, target, data)
		})
	})
})