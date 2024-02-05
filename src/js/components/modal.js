export class TurtleUIModal {
  constructor(element) {
    this._element = element
  }

  static generate(element) {
    return new TurtleUIModal(element)
  }

  static actions = {
    toggle: {
      "modal": function(target, data) {
        let modal = TurtleUIModal.generate(target)
        modal.toggle()
      }
    }
  }


  open() {
		this._element.style.display = "block"
		this._element.classList.add("active")
	}

	close() {
		this._element.classList.remove("active")
		this._element.classList.add("out")

		setTimeout(() => {
			this._element.style.display = "none"
			this._element.classList.remove("out")
		}, 300)
	}

	toggle() {
		if (this._element.classList.contains("active")) {
			this.close()
		} else {
			this.open()
		}
	}
	
}