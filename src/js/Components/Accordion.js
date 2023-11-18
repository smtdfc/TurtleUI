import {generateKey,getElement ,createElement} from "../utils.js"

export class Accordion{
	constructor(element){
		this.component = getElement(element) || createElement('div','accordion')
		this.header = getElement(".accordion-header",this.component) || createElement('div','accordion-header') 
		this.body = getElement(".accordion-body",this.component) || createElement('div','accordion-body')
		this.id = generateKey("accrodion_")
	}
	
	setIcon(icon){
		this.header.style.setProperty("--accordion-icon",icon)
	}
	
	getIcon(){
		 return this.header.style.getProperty("--accordion-icon")
	}
	
	static actions ={
		"tToggle":function(target,data){
			let accordion = new Accordion(data.tTarget)
			accordion.toggle()
		}
	}
	
	static generate(title="",body=""){
		let id = generateKey("_accordion")
		let element = createElement("div","accordion",id)
		element.innerHTML =`<div class="accordion-header" data-t-toggle="accordion" data-t-target="#${id}">${title}</div> <div class="accordion-body">${body}</div>`
		return new Accordion(element)
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
	
	attach(element){
		(getElement(element) || createElement("div")).appendChild(this.component)
	}
}