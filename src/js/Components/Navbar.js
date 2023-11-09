import {getElement} from "../utils.js"

export class Navbar {

	constructor(element) {
		this.component = getElement(element)
		this.autoHideActiveClassName = !null
	}
	
	static supportedActions = ["tToggle"]

	toggle() {
		this.component.classList.toggle("active")
	}

	enableAutoHide() {
		window.TURTLE_UI.navbars_auto_hide.push(this)
	}

	static create(element) {
		let navbar = new Navbar(null)
		navbar.component = element
		return navbar
	}
}