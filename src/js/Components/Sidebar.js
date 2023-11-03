export class Sidebar {
	constructor(selector) {
		this.selector = selector
		this.component = document.querySelector(selector)
	}
	static supportedActions = ["tToggle"]
	toggle() {
		this.component.classList.toggle("active")
	}
	
	open(){
		this.component.classList.add("active")
	}
	
	open() {
		this.component.classList.close("active")
	}
}