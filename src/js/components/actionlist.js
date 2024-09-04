export class TurtleUIActionList {
  constructor(element) {
    this._element = element
  }

  static generate(element) {
    return new TurtleUIActionList(element)
  }

  static actions = {
    toggle: {
      "actionlist": function(target, data) {
        let actionlist = TurtleUIActionList.generate(target)
        actionlist.toggle()
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
    }, 1000)
  }

  toggle() {
    if (this._element.classList.contains("active")) {
      this.close()
    } else {
      this.open()
    }
  }

}