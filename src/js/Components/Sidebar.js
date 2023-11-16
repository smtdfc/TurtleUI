import { generateKey, getElement } from "../utils.js"

export class Sidebar {
	constructor(element) {
		this.component = getElement(element)
		this.id = generateKey("sidebar_")
	}

	static actions = {
		"tToggle": function(target, data) {
			let sidebar = new Sidebar(data.tTarget)
			sidebar.toggle()
		}
	}

	open() {
		this.componentu.classList.add("active")
	}

	close() {
		this.component.classList.remove("active")
	}

	toggle() {
		this.component.classList.toggle("active")
	}
}