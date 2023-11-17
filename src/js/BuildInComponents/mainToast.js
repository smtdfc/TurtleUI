const main_toast = document.createElement("div")
main_toast.className = "toasts toasts-bottom"
main_toast.style.zIndex = 1000
document.body.appendChild(main_toast)


export const MainToast = {
	element: main_toast,
	
	info: function(msg) {
		this.element.innerHTML += `
			
		`
	},
	close: function() {
		this.count--
		if (this.count <= 0) {
			this.count = 0
			this.element.style.animationName = "fadeOut"

			function fn() {
				this.element.classList.remove("active")
				this.element.style.animationName = "fadeIn"
			}

			setTimeout(fn.bind(this), 200)
		}
	}
}