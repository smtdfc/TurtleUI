export class TurtleUICarousel {
  constructor(element, configs = {}) {
    this.element = element
    this.configs = configs
    this.imgaes
  }

  next() {
    this.element.classList.add("active")
  }

  prev() {
    this.element.classList.remove("active")
  }

  
  static name = "carousel"
  static injector(element, action, data = {}) {
    let component = new TurtleUICarousel(element)
    switch (action) {
      case 'next':
        component.open()
        break;
      case 'prev':
        component.close()
        break;

      default:
        break
    }
  }
}