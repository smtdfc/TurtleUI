import {generateKey,getElement} from "../utils.js"

export class Navbar{
	constructor(element){
		this.component = getElement(element)
		this.id = generateKey("navbar_")
	}
	
	static actions ={
		"tToggle":function(target,data){
			let navbar = new Navbar(data.tTarget)
			navbar.toggle()
		}
	}
	
	open(){
		this.componentu.classList.add("active")
	}
	
	close(){
		this.component.classList.remove("active")
	}
	
	toggle(){
		this.component.classList.toggle("active")
	}
}