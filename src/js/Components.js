const selector = new window.Turtle.TurtleSelector()
let count = 0
let MainOverlayElement = document.createElement("div")
MainOverlayElement.classList.add("overlay")
MainOverlayElement.classList.add("main")
document.body.append(MainOverlayElement)

export class TurtleUIMainOverlay {
	static open() {
		count++
		MainOverlayElement.classList.add("active")
	}

	static close() {
		count -= 1
		if (count <= 0) {
			MainOverlayElement.classList.remove("active")
			count = 0
		}
	}
}

export class TurtleUIComponent {
	constructor(component) {
		this.component = selector.byQuery(component)
	}

	child(query) {
		return this.component.select(query)
	}

	triggerEvent(name, data) {
		const event = new CustomEvent(name, {
			detail: data
		})
		window.dispatchEvent(event)
	}
}

export class TurtleUITab {
	constructor(query){
		this.selector = new window.Turtle.TurtleSelector()
		this.tab = this.selector.byQuery(query)
		this.tabItems = this.tab.selectAll(".tab-items>*")
		this.tabContents = this.tab.selectAll(".tab-contents>*")
	}
	
	open(index){
		this.tabItems.list.forEach(tabItem=>{
			
			tabItem.classList.remove("active")
		})

		let element = this.tabItems.get(index)
		if(!element.HTMLElement){
			throw "Invalid tab item index"
		}else{
			element.classList.add("active")
		}
		
		this.tabContents.list.forEach(tabContent => {
			tabContent.classList.remove("active")
		})
		
		element = this.tabContents.get(index)
		if (!element.HTMLElement) {
			throw "Invalid tab content index"
		} else {
			element.classList.add("active")
		}
	}
	
	close(index) {
		let element = this.tabItems.get(index)
		if (!element.HTMLElement) {
			throw "Invalid tab item index"
		} else {
			element.classList.remove("active")
		}
	
		element = this.tabContent.get(index)
		if (!element.HTMLElement) {
			throw "Invalid tab content index"
		} else {
			element.classList.remove("active")
		}
	}
}
export class TurtleUINavbar extends TurtleUIComponent {
	constructor(query) {
		super(query)
	}

	getState() {
		return this.component.classList.contains("active") ? "open" : "close"
	}

	setState(mode) {
		let state = this.getState()

		switch (mode) {
			case "open":
			  TurtleUIMainOverlay.open()
				this.component.classList.add("active")
				this.triggerEvent("navbar-open", {
					navbar: this
				})
				break
			case "close":
			  TurtleUIMainOverlay.close()
				this.component.classList.remove("active")
				this.triggerEvent("navbar-close", {
					navbar: this
				})
				break
			case "toggle":
				if (state == "open") {
				  TurtleUIMainOverlay.close()
					this.component.classList.remove("active")
					this.triggerEvent("navbar-close", {
						navbar: this
					})
				} else {
				  TurtleUIMainOverlay.open()
					this.component.classList.add("active")
					this.triggerEvent("navbar-open", {
						navbar: this
					})
				}
		}
	}
}


export class TurtleUISidebar extends TurtleUIComponent {
	constructor(query) {
		super(query)
	}

	getState() {
		return this.component.classList.contains("active") ? "open" : "close"
	}

	setState(mode) {
		let state = this.getState()

		switch (mode) {
			case "open":
				//TurtleUIMainOverlay.open()
				this.component.classList.add("active")
				this.triggerEvent("sidebar-open", {
					sidebar: this
				})
				break
			case "close":
				//TurtleUIMainOverlay.close()
				this.component.classList.remove("active")
				this.triggerEvent("sidebar-close", {
					sidebar: this
				})
				break
			case "toggle":
				if (state == "open") {
					//TurtleUIMainOverlay.close()
					this.component.classList.remove("active")
					this.triggerEvent("sidebar-close", {
						sidebar: this
					})
				} else {

					//TurtleUIMainOverlay.open()
					this.component.classList.add("active")
					this.triggerEvent("sidebar-open", {
						sidebar: this
					})
				}
		}
	}

}


export class TurtleUIAccordion extends TurtleUIComponent {
	constructor(query) {
		super(query)
	}

	getState() {
		return this.component.classList.contains("active") ? "open" : "close"
	}

	setState(mode) {
		let state = this.getState()

		switch (mode) {
			case "open":
				this.component.classList.add("active")
				this.triggerEvent("accordion-open", {
					accordion: this
				})
				break
			case "close":
				this.component.classList.remove("active")
				this.triggerEvent("accordion-close", {
					accordion: this
				})
				break
			case "toggle":
				if (state == "open") {
					this.component.classList.remove("active")
					this.triggerEvent("accordion-close", {
						accordion: this
					})
				} else {
					this.component.classList.add("active")
					this.triggerEvent("accordion-open", {
						accordion: this
					})
				}
		}
	}

}

export class TurtleUIOffcanvas extends TurtleUIComponent {
	constructor(query) {
		super(query)
	}

	getState() {
		return this.component.classList.contains("active") ? "open" : "close"
	}

	setState(mode) {
		let state = this.getState()

		switch (mode) {
			case "open":
				TurtleUIMainOverlay.open()
				this.component.classList.add("active")
				this.triggerEvent("offcanvas-open", {
					offcanvas: this
				})
				break
			case "close":
				TurtleUIMainOverlay.close()
				this.component.classList.remove("active")
				this.triggerEvent("offcanvas-close", {
					offcanvas: this
				})
				break
			case "toggle":
				if (state == "open") {
					TurtleUIMainOverlay.close()
					this.component.classList.remove("active")
					this.triggerEvent("offcanvas-close", {
						offcanvas: this
					})
				} else {

					TurtleUIMainOverlay.open()
					this.component.classList.add("active")
					this.triggerEvent("offcanvas-open", {
						offcanvas: this
					})
				}
		}
	}

}
export class TurtleUIOverlay extends TurtleUIComponent {
	constructor(query) {
		super(query)
	}

	getState() {
		return this.component.classList.contains("active") ? "open" : "close"
	}

	setState(mode) {
		let state = this.getState()

		switch (mode) {
			case "open":
				this.component.classList.add("active")
				this.triggerEvent("overlay-open", {
					overlay: this
				})
				break
			case "close":
				this.component.classList.remove("active")
				this.triggerEvent("overlay-close", {
					overlay: this
				})
				break
			case "toggle":
				if (state == "open") {
					this.component.classList.remove("active")
					this.triggerEvent("overlay-close", {
						overlay: this
					})
				} else {
					this.component.classList.add("active")
					this.triggerEvent("overlay-open", {
						overlay: this
					})
				}
		}
	}

}


export class TurtleUIModal extends TurtleUIComponent {
	constructor(query) {
		super(query)
	}

	getState() {
		return this.component.classList.contains("active") ? "open" : "close"
	}

	setState(mode) {
		let state = this.getState()

		switch (mode) {
			case "open":
				this.component.classList.add("active")
				this.triggerEvent("modal-open", {
					modal: this
				})
				break
			case "close":
				this.component.classList.remove("active")
				this.triggerEvent("modal-close", {
					modal: this
				})
				break
			case "toggle":
				if (state == "open") {
					this.component.classList.remove("active")
					this.triggerEvent("modal-close", {
						modal: this
					})
				} else {
					this.component.classList.add("active")
					this.triggerEvent("modal-open", {
						modal: this
					})
				}
		}
	}
}
