export class TurtleUINavbar {
  constructor(element, configs = {}) {
    this.element = element
    this.configs = configs
  }

  open() {
    this.element.classList.add("active")
  }

  close() {
    this.element.classList.remove("active")
  }

  toggle() {
    this.element.classList.toggle("active")
  }

  static name = "navbar"
  static injector(element, action, data = {}) {
    let component = new TurtleUINavbar(element)
    switch (action) {
      case 'open':
        component.open()
        break;
      case 'close':
        component.close()
        break;
      case 'toggle':

        component.toggle()
        break;

      default:
        break
    }
  }
}