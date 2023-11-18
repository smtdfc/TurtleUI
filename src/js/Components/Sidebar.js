import { generateKey, getElement, createElement } from "../utils.js"

export class Sidebar {
	constructor(element) {
		this.component = getElement(element) || createElement("div", "sidebar")
		this.id = generateKey("sidebar_")
		this.menu = getElement(".sidebar-menu", this.component) || createElement("div", "sidebar-menu")
	}
	
	static generate(dir = "left", closeBtn = "close",menu="") {
		let id = generateKey("_sidebar")
		let element = createElement("div", `sidebar sidebar-${dir}`, id)
		element.innerHTML = `<button class="sidebar-toggle-btn" data-t-toggle="sidebar" data-t-target="#${id}">${closeBtn}</button></div> <ul class="sidebar-menu">${menu}</ul>`
		return new Sidebar(element)
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
	
	attach(element) {
		(getElement(element) || createElement("div")).appendChild(this.component)
	}
}