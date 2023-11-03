export class Accordion{
	constructor(selector){
		this.selector = selector
		this.component= document.querySelector(selector)
	}
	
	static supportedActions =["tToggle"]
	
	toggle(){
		this.component.classList.toggle("active")
	}
}