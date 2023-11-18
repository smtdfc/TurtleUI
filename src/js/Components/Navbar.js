import { generateKey, getElement, createElement } from "../utils.js"

export class NavbarContainer {
	constructor(element) {
		this.component = getElement(element) || createElement("div", "navbar-container")
		this.brand = getElement(".navbar-brand", this.component) || createElement("div", "navbar-brand")
		this.contents = getElement(".navbar-brand", this.component) || createElement("div", "navbar-contents")
		this.items = getElement("navbar-items", this.component) || createElement("div", "navbar-items")
	}

	static actions = {
		"tToggle": function(target, data) {
			let navbar = new NavbarContainer(data.tTarget)
			navbar.toggle()
		}
	}

	static generate(opts = {}) {
		let id = generateKey("_navbar_container")
		let element = createElement("div", "navbar-container", id)
		element.innerHTML = `
			<div class="navbar-brand">
				<button class=" navbar-toggle-btn" data-t-toggle="navbarContainer" data-t-target="#${id}">${opts.navbarOpenBtn ?? "open"}</button>
				<h3>${opts.brand.title ?? ""}</h3>
			</div>
			<div class="navbar-contents">
				<button class="material-symbols-outlined navbar-toggle-btn" data-t-toggle="navbarContainer" data-t-target="#${id}">${opts.navbarCloseBtn ?? "close"}</button>
				<ul class="navbar-menu"></ul>
			</div>
			<div class="navbar-items"></div>
		`
		return new NavbarContainer(element)
	}

	open() {
		this.componentu.classList.add("active")
	}

	close() {
		this.component.classList.remove("active")
	}

	toggle() {
		this.component.classList.toggle("active")
	}

	hide() {
		this.component.classList.add("d-none")
	}

	show() {
		this.component.classList.remove("d-none")
	}

	inject(navbar) {
		if (navbar instanceof Navbar) {
			navbar.addContainer(this)
		}
	}
}

export class Navbar {
	constructor(element) {
		this.component = getElement(element)
		this.id = generateKey("navbar_")
		let containers = this.component.getElementsByClassName(".navbar-container")
		this.containers = []
		Array.from(containers).forEach(cont => {
			this.containers.push(new NavbarContainer(cont))
		})
	}

	addContainer(container) {
		if (container instanceof HTMLElement || container instanceof Node) {
			this.containers.push(new NavbarContainer(container))
		} else if (container instanceof NavbarContainer) {
			this.containers.push(container)
		}
	}

	static generate() {
		let id = generateKey("_navbar")
		let element = createElement("div", "navbar", id)
		return new Navbar(element)
	}

	attach(element) {
		(getElement(element) || createElement("div")).appendChild(this.component)
	}
}