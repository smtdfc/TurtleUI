import {getElement} from "../utils.js"

export class Offcanvas{
	constructor(element){
		this.component= getElement(element)
	}
	static supportedActions =["tToggle"]

	toggle(){
		if(this.component.classList.contains("active")){
			TURTLE_UI.buildIn.mainOverlay.close()
		}else{
			TURTLE_UI.buildIn.mainOverlay.open()
		}
		this.component.classList.toggle("active")
	}
}