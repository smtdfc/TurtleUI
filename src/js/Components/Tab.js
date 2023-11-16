import { generateKey, getElement } from "../utils.js"

export class Tab {
	constructor(element) {
		this.component = getElement(element)
		this.id = generateKey("accrodion_")
		this.tabItems = this.component.querySelector(".tab-items") || document.createElement("div")
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