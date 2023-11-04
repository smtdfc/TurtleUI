export class Offcanvas{
	constructor(selector){
		this.selector = selector
		this.component= document.querySelector(selector)
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