import {getElement} from "../utils.js"


export class Modal {
	constructor(element) {
		
		this.component = getElement(element)
	}
	
	static supportedActions = ["tToggle"]

	getState() {
		return this.component.classList.contains("active") ? "open" : "close"
	}
	
	toggle() {
		if(this.getState() == "open"){
			this.component.classList.remove("active")
			
			this.component.classList.add("out")
			setTimeout(()=>{
				this.component.classList.remove("out")
				this.component.style.display = "none"
			},300)
		}else{
			
			this.component.style.display="block"
			this.component.classList.add("active")
		}
	}
}