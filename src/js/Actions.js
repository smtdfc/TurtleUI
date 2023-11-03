import * as components from "./Components/index.js"



const COMPONENT_NAMES = {
	"accordion": components.Accordion,
	"navbar": components.Navbar,
	"modal": components.Modal,
	"offcanvas": components.Offcanvas,
	"sidebar": components.Sidebar,
	"carousel":components.Carousel,
}

const ACTIONS ={
	"tToggle":function(target,data){
		let component_name = data.tToggle
		if (!component_name) {
			return
		}

		if(!COMPONENT_NAMES[component_name].supportedActions.includes("tToggle")){
			return
		} 
		let $component = new COMPONENT_NAMES[component_name](data.tTarget)
		$component.toggle(data)
		
	},

}

const BIND_DOM_EVENTS ={
	"click":["tToggle"]
}

Object.keys(BIND_DOM_EVENTS).forEach(event_name=>{
	window.addEventListener(event_name,function(event){
		let target = event.target
		let data = target.dataset
		let actions = BIND_DOM_EVENTS[event_name]
		actions.forEach(act=>{
			ACTIONS[act](target,data)
		})
	})
})