import { generateKey, getElement } from "../utils.js"

export class Offcanvas {
	constructor(element) {
		this.component = getElement(element)
		this.id = generateKey("accrodion_")
	}

	static actions = {
		"tToggle": function(target, data) {
			let offcanvas = new Offcanvas(data.tTarget)
			offcanvas.toggle()
		}
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
		if(this.component.classList.contains("active")){
			window.TurtleUI_BuildIn.main_overlay.close()
		}else{
			window.TurtleUI_BuildIn.main_overlay.open()
		}
		this.component.classList.toggle("active")
	}
}