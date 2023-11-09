import {getElement} from "../utils.js"

export class Sidebar {
	constructor(element){
		this.component= getElement(element)
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