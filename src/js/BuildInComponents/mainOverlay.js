const main_overlay = document.createElement("div")
main_overlay.className = "overlay"
main_overlay.style.zIndex = 1000
document.body.appendChild(main_overlay)

export const MainOverlay = {
	element: main_overlay,
	count: 0,
	open: function() {
		this.count++
		this.element.classList.add("active")
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

window.TurtleUI_BuildIn.main_overlay = MainOverlay