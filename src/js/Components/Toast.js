import { generateKey, getElement, createElement } from "../utils.js"


export class ToastContainer {
	constructor(element) {
		this.component = getElement(element) || createElement("div", "toasts toasts-bottom")
	}

	setDirection(d = "bottom") {
		this.component.classList.remove("toasts-bottom")
		this.component.classList.remove("toasts-top")
		this.component.classList.add("toasts-" + d)
	}

	addToast(toast) {
		if (toast instanceof Toast) {
			this.component.appendChild(toast.component)
		} else {
			toast = new Toast(toast)
			this.component.appendChild(toast.component)
		}
	}
	
	removeAll(){
		this.component.innerHTML = ""
	}
	
	
}

export class Toast {
	constructor(element) {
		this.component = getElement(element) || createElement("div", "toast")
		this.body = getElement(element) || createElement("div", "toast-body")
	}

	timeout(time = 5000) {
		setTimeout(() => {
			try{this.component.remove()}catch(err){}
		}, time)
	}


}