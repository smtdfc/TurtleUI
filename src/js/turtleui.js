import * as components from "./Components/index.js"
import * as Actions from "./Actions.js";

export function generateKey(prefix = "_") {
	return `${prefix}${(Math.floor(Math.random()*100000)*Date.now()).toString(16)}`
}

window.TURTLE_UI = {
	navbars_auto_hide: []
}

document.querySelectorAll(`[data-autohide=true]`).forEach((nav)=>{
	let navbar = components.Navbar.create(nav)
	navbar.autoHideActiveClassName = nav.dataset.autohideToggle
	navbar.enableAutoHide()
})



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

export class TurtleUIModule {
	constructor(app) {
		this.app = app
		this.buildInComponents = buildIn
		this.app.ui = this
		this.actions = Actions
		this.generateKey = generateKey
	}
	init() {}
	addToast(msg, level = "info", timeout = 1500) {
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


export * from "./Components/index.js"
export * from "./Actions.js"