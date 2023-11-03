export class Navbar {
	constructor(selector) {
		this.selector = selector
		if (selector) this.component = document.querySelector(selector)
		else this.component = document.createElement("div")
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