import * as components from "./Components.js"

export function generateKey(prefix = "_") {
	return `${prefix}${(Math.floor(Math.random()*100000)*Date.now()).toString(16)}`
}


const component_names = {
	"navbar": components.NavbarComponent,
	"offcanvas": components.OffcanvasComponent,
	"accordion": components.AccordionComponent,
	"sidebar": components.SidebarComponent,
	"modal": components.ModalComponent,
}

const Actions = {
	"toggle": function(data, t) {
		let toggle = data.toggle
		let target = data.target
		let Component = component_names[toggle]
		if (!Component) {
			throw `This action unsupported component '${toggle}' !`
		}



		let $component = new Component(target)
		$component.toggle()
		if (["offcanvas"].includes(toggle)) {
			if ($component.states.active) {
				buildIn.mainOverlay.open()
			} else {
				buildIn.mainOverlay.close()
			}
		}
	},
	removeparent: function(data, t) {
		t.parentElement.remove()
	},
	openTab: function(data, target) {
		let tab = document.querySelector(data["opentab"])
		let idx = parseInt(data["idx"]) || 0
		let tabItems = tab.querySelector(".tab-items")
		let tabContents = tab.querySelector(".tab-contents")
		for (let i = 0; i < tabItems.children.length; i++) {
			tabItems.children[i].classList.remove("active")
			if (i == idx) {
				tabItems.children[i].scrollIntoView({ behavior: 'smooth', block: "end" })
				tabItems.children[i].classList.add("active")
			}
		}

		for (let i = 0; i < tabContents.children.length; i++) {
			tabContents.children[i].classList.remove("active")
			if (i == idx) tabContents.children[i].classList.add("active")
		}

	}
}

const buildIn = {
	"mainToasts": {
		element: document.createElement("div"),
		init: function() {
			this.element.className = "toasts toasts-bottom"
			this.element.id = generateKey()
			document.body.appendChild(this.element)
		}
	},
	"mainOverlay": {
		element: document.createElement("div"),
		_count: 0,
		init: function() {
			this.element.id = generateKey()
			this.element.className = `overlay `
			document.body.appendChild(this.element)

		},
		open: function() {
			if (this._count == 0) this.element.classList.add("active")
			this._count++
		},
		close: function() {
			this._count--
			if (this._count <= 0) {
				this._count = 0
				this.element.classList.remove("active")
			}
		}
	},

}

Object.keys(buildIn).forEach(name => buildIn[name].init())
window.addEventListener("click", function(e) {
	try {
		let target = e.target
		let ele = target.parentElement.parentElement
		if (ele.classList.contains("navbar-menu") || ele.classList.contains("offcanvas-nav-menu") || ele.classList.contains("sidebar-menu")) {
			target.parentElement.classList.toggle("open")
		}
	} catch (e) {}

	let target = e.target
	let data = target.dataset

	if (data.toggle) Actions.toggle(data, target)
	if (data.removeparent) Actions.removeparent(data, target)
	if (data.opentab) Actions.openTab(data, target)
})


export class TurtleUIModule {
	constructor(app) {
		this.app = app
		this.buildInComponents = buildIn
		this.app.ui = this
		this.actions = Actions
		this.generateKey = generateKey
	}
	init() {}
	addMsg(msg, level = "info", timeout = 1500) {
		if (level == "error") level = "danger"
		let toast = document.createElement("div")
		toast.className = `toast toast-${level}`
		toast.id = generateKey("toast_")
		toast.innerHTML = `
	      <div class="toast-contents">${msg}</div>
	    `
		buildIn.mainToasts.element.appendChild(toast)
		setTimeout(() => {
			toast.remove()
		}, timeout)
		return toast
	}
}


export * as components from "./Components.js"