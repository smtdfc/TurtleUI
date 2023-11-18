import { generateKey, getElement ,createElement } from "../utils.js"

export class Modal {
	constructor(element) {
		this.component = getElement(element)
		this.contents = getElement(".modal-contents", this.component) || createElement('div', 'modal-contents')
		this.header = getElement(".modal-header", this.contents) || createElement('div', 'modal-header')
		this.body = getElement(".modal-body", this.contents) || createElement('div', 'modal-header')
		this.id = generateKey("modal_")
	}

	enableFullscreen() {
		this.component.classList.add("modal-fullscreen")
	}

	disableFullscreen() {
		this.component.classList.remove("modal-fullscreen")
	}

	static actions = {
		"tToggle": function(target, data) {
			let modal = new Modal(data.tTarget)
			modal.toggle()
		}
	}

	static generate(title = "", closeBtn="close", body = "") {
		let id = generateKey("_modal")
		let element = createElement("div", "modal", id)
		element.innerHTML = `<div class="modal-contents"><div class="modal-header" ><h3 class="modal-title">${title}</h3><button class="modal-toggle-btn" data-t-toggle="modal" data-t-target="#${id}">${closeBtn}</button></div> <div class="modal-body">${body}</div></div>`
		return new Modal(element)
	}
	
	open() {
		this.component.style.display = "block"
		this.component.classList.add("active")
	}

	close() {
		this.component.classList.remove("active")
		this.component.classList.add("out")

		setTimeout(() => {
			this.component.style.display = "none"
			this.component.classList.remove("out")
		}, 300)
	}

	toggle() {
		if (this.component.classList.contains("active")) {
			this.close()
		} else {
			this.open()
		}
	}
	
	attach(element) {
		(getElement(element) || createElement("div")).appendChild(this.component)
	}
}