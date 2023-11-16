import {generateKey,getElement} from "../utils.js"

export class Accordion{
	constructor(element){
		this.component = getElement(element)
		this.id = generateKey("accrodion_")
	}
	
	static actions ={
		"tToggle":function(target,data){
			
			let accordion = new Accordion(data.tTarget)
			accordion.toggle()
		}
	}
	
	open(){
		this.component.classList.add("active")
	}
	
	close(){
		this.component.classList.remove("active")
	}
	
	toggle(){
		this.component.classList.toggle("active")
	}
}