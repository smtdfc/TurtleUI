import { generateKey, getElement, createElement } from "../utils.js"

export class Offcanvas {
	constructor(element) {
		this.component = getElement(element) || createElement("div", "offcanvas")
		this.header = getElement(".offcanvas-header", this.component) || createElement("div", "offcanvas-header")
		this.body = getElement(".offcanvas-body", this.component) || createElement("div", "offcanvas-body")
		this.id = generateKey("offcanvas_")
	}

	setDirection(d = "left") {
		let className = `offcanvas-${d}`
		this.component.classList.remove("offcanvas-left")
		this.component.classList.remove("offcanvas-right")
		this.component.classList.remove("offcanvas-top")
		this.component.classList.remove("offcanvas-bottom")
		this.component.classList.add(className)
	}

	static actions = {
		"tToggle": function(target, data) {
			let offcanvas = new Offcanvas(data.tTarget)
			offcanvas.toggle()
		}
	}

	static generate(title = "", dir = "left", closeBtn = "close", body = "") {
		let id = generateKey("_offcanvas")
		let element = createElement("div", `offcanvas offcanvas-${dir}`, id)
		element.innerHTML = `<div class="offcanvas-header" ><h3 class="offcanvas-title">${title}</h3><button class="offcanvas-toggle-btn" data-t-toggle="offcanvas" data-t-target="#${id}">${closeBtn}</button></div> <div class="offcanvas-body">${body}</div>`
		return new Offcanvas(element)
	}

	open() {
		window.TurtleUI_BuildIn.main_overlay.open()
		this.component.classList.add("active")
	}

	close() {
		window.TurtleUI_BuildIn.main_overlay.close()
		this.component.classList.remove("active")
	}

	toggle() {
		if (this.component.classList.contains("active")) {
			window.TurtleUI_BuildIn.main_overlay.close()
		} else {
			window.TurtleUI_BuildIn.main_overlay.open()
		}
		this.component.classList.toggle("active")
	}

	attach(element) {
		(getElement(element) || createElement("div")).appendChild(this.component)
	}


}