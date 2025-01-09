export class TurtleUIActionList {
  constructor(element) {
    this.element = element
  }

  open() {
    this.element.style.display = "block"
    this.element.classList.add("active")
  }

  close() {
    this.element.classList.remove("active")
    this.element.classList.add("out")

    setTimeout(() => {
      this.element.style.display = "none"
      this.element.classList.remove("out")
    }, 1000)
  }

  toggle() {
    if (this.element.classList.contains("active")) {
      this.close()
    } else {
      this.open()
    }
  }

  static injector(event, data) {
    let target = new this(event.target)
    switch (event.name) {
      case 'toggle':
        target.toggle()
        break;

      default:

    }
  }

  static name = "actionlist"
}