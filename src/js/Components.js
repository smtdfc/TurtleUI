export class BaseComponent{
  constructor(name,query){
    this.name = name
    this.component = document.querySelector(query)
    this.data = {}
    this.states = {}
    this.app = null
  }
  
  setState(name,value){
    this.states[name] = value
    this.onStateChange(name,value)
  }
  
  triggerEvent(name){
    window.dispatchEvent(new CustomEvent(`${this.name}_${name}`,{
      detail:this
    }))
  }
  
  onStateChange(name,value){
    
  }
}

export class AccordionComponent extends BaseComponent{
  constructor(query){
    super("accordion",query)
    this.states["active"] = false
  }
  
  active(){
    this.component.classList.add("active")
    this.states["active"] = true
    this.triggerEvent("actived")
  }
  
  inactive() {
    this.component.classList.remove("active")
    this.states["active"] = false
    this.triggerEvent("inactived")
  }
  
  toggle(){
    let state = this.component.classList.contains("active")
    state ? this.inactive() : this.active()
  }
  
}

export class NavbarComponent extends BaseComponent {
	constructor(query) {
		super("navbar", query)
		this.states["active"] = false
	}

	active() {
		this.component.classList.add("active")
		this.states["active"] = true
		this.triggerEvent("actived")
	}

	inactive() {
		this.component.classList.remove("active")
		this.states["active"] = false
		this.triggerEvent("inactived")
	}

	toggle() {
		let state = this.component.classList.contains("active")
		state ? this.inactive() : this.active()
	}
}

export class OffcanvasComponent extends BaseComponent {
	constructor(query) {
		super("offcanvas", query)
		this.states["active"] = false
	}

	active() {
		this.component.classList.add("active")
		this.states["active"] = true
		this.triggerEvent("actived")
	}

	inactive() {
		this.component.classList.remove("active")
		this.states["active"] = false
		this.triggerEvent("inactived")
	}

	toggle() {
		let state = this.component.classList.contains("active")
		state ? this.inactive() : this.active()
	}

}

export class SidebarComponent extends BaseComponent {
	constructor(query) {
		super("sidebar", query)
		this.states["active"] = false
	}

	active() {
		this.component.classList.add("active")
		this.states["active"] = true
		this.triggerEvent("actived")
	}

	inactive() {
		this.component.classList.remove("active")
		this.states["active"] = false
		this.triggerEvent("inactived")
	}

	toggle() {
		let state = this.component.classList.contains("active")
		state ? this.inactive() : this.active()
	}

}

export class ModalComponent extends BaseComponent {
	constructor(query) {
		super("modal", query)
		this.states["active"] = false
	}

	active() {
		this.component.classList.add("active")
		this.states["active"] = true
		this.triggerEvent("actived")
	}

	inactive() {
		this.component.classList.remove("active")
		this.states["active"] = false
		this.triggerEvent("inactived")
	}

	toggle() {
		let state = this.component.classList.contains("active")
		state ? this.inactive() : this.active()
	}

}