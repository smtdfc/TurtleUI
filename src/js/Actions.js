import * as Components from "./Components.js"
export const Actions = {
	"open-tab": function(target, data) {
		let tab = new Components.TurtleUITab(data.tab)
		tab.open(parseInt(data.index))
	},
	"close-tab": function(target, data) {
		let tab = new Components.TurtleUITab(data.tab)
		tab.close(parseInt(data.index))
	},
	"toggle-accordion": function(target, args) {
		let accordion = new Components.TurtleUIAccordion(args.accordion)
		accordion.setState("toggle")
	},
	"toggle-offcanvas": function(target, args) {
		let offcanvas = new Components.TurtleUIOffcanvas(args.offcanvas)
		offcanvas.setState("toggle")
	},
	"toggle-overlay": function(target, args) {
		let overlay = new Components.TurtleUIOverlay(args.overlay)
		overlay.setState("toggle")
	},
	"toggle-modal": function(target, args) {
		let modal = new Components.TurtleUIModal(args.modal)
		modal.setState("toggle")
	},
	"toggle-navbar": function(target, args) {
		let navbar = new Components.TurtleUINavbar(args.navbar)
		navbar.setState("toggle")
	},
	"open-search-box":function(target,args){
		let searchbox = document.querySelector(args.searchbox)
		searchbox.classList.add("open")
	},
		"close-search-box":function(target,args){
		let searchbox = document.querySelector(args.searchbox)
		searchbox.classList.remove("open")
	}
}

window.addEventListener("click", function(event) {
	let target = event.target
	let data = target.dataset
	try {
		if (target.parentElement.classList.contains("navbar-item") || target.parentElement.classList.contains("nav-item")) {
			target.parentElement.classList.contains("active-subitem") ?
				target.parentElement.classList.remove("active-subitem") :
				target.parentElement.classList.add("active-subitem")
		}


	} catch (e) {}
	if (data.action) {
		if (Actions[data.action]) {
			Actions[data.action](target, data)
		} else {
			throw `Invalid Action : ${data.action}`
		}
	}
})