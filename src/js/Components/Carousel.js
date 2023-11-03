export class Carousel {
	constructor(selector) {
		this.selector = selector
		this.count = 0
		this.component = document.querySelector(selector)
		this.items = this.component.querySelector(".carousel-items") || document.createElement("div")
	}

	static supportedActions = ["tToggle"]

	toggle(data) {
		let items = Array.from(this.items.children)
		items.forEach((child, idx) => {
			if (child.classList.contains("active")) {
				this.count = idx
				child.classList.remove("active")
			}

		})

		if (data.type == "next") {
			if (this.count == (items.length - 1)) {
				this.count = -1
			}
			this.count++
		} else {
			if (this.count == 0) {
				this.count = items.length
			}
			this.count--
		}
		items[this.count].classList.add("active")
		this.component.classList.toggle("active")
	}
}