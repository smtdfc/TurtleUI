import {getElement} from "../utils.js"

export class Accordion{
	constructor(element){
		this.component= getElement(element)
	}
	
	static supportedActions =["tToggle"]
	
	toggle(){
		this.component.classList.toggle("active")
	}
}