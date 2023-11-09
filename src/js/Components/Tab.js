import {getElement} from "../utils.js"

export class Tab {
	constructor(element) {
		this.component = getElement(element)
		this.tabItems = this.component.querySelector(".tab-items")
	}

	reset() {
		for (let i = 0; i < this.tabItems.children.length; i++) {
			let item = this.tabItems.children[i]
			item.classList.remove("active")
			if (item.dataset.bind) {
				document.querySelector(item.dataset.bind).classList.remove("active")
			}
		}
	}


	openTab(idx) {

		this.reset()
		let t = this.tabItems[idx]
		if (!t) return
		t.classList.add("active")
		if (t.dataset.bind) {
			document.querySelector(t.dataset.item).classList.add("active")
		}
	}


}