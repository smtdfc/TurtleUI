import { generateKey, getElement } from "../utils.js"

export class Modal {
	constructor(element) {
		this.component = getElement(element)
		this.id = generateKey("accrodion_")
	}

	static actions = {
		"tToggle": function(target, data) {
			let modal = new Modal(data.tTarget)
			modal.toggle()
		}
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
}