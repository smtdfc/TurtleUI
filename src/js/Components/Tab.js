import { generateKey, getElement ,createElement} from "../utils.js"

export class Tab {
	constructor(element) {
		this.component = getElement(element)
		this.id = generateKey("tab_")
		this.tabItems = this.component.querySelector(".tab-items") || createElement("ul","tab-items")
	}

	static generate() {
		let id = generateKey("_tab")
		let element = createElement("div", `tab`, id)
		element.innerHTML = `<ul class="tab-items" ></ul><div></div>`
		return new Tab(element)
	}
	static actions = {
		"tOpen": function(target, data) {
			let tab = new Tab(data.tTarget)
			//tab.reset()
			
			let idx = tab.getItemIndex(target)
			
			tab.open(idx)
		}
	}

	getItemIndex(item) {
		let p = -Infinity
		Array.from(this.tabItems.children).forEach((child, idx) => {
			if (child === item) p = idx
		})
		return p
	}

	current() {
		let p = -Infinity
		Array.from(this.tabItems.children).forEach((child, idx) => {
			if (child.classList.contains("active")) p = idx
		})
		return p
	}

	reset() {
		Array.from(this.tabItems.children).forEach(child => {
			child.classList.remove("active")
			if (child.dataset.tBind) {
				let contents = document.querySelector(child.dataset.tBind) || document.createElement("div")
				contents.classList.remove("active")
			}
		})
	}

	open(index) {
		
		Array.from(this.tabItems.children).forEach((child, i) => {
			if (index == i) {
				child.classList.add("active")
				if (child.dataset.tBind) {
					let contents = document.querySelector(child.dataset.tBind) || document.createElement("div")
					contents.classList.add("active")
				}
			} else {
				child.classList.remove("active")
				if (child.dataset.tBind) {
					let contents = document.querySelector(child.dataset.tBind) || document.createElement("div")
					contents.classList.remove("active")
				}
			}
		})

	}
}