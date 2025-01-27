export class TurtleUIOffcanvas {
  constructor(element, configs = {}) {
    this.element = element;
    this.configs = configs;
  }

  open() {
    if (!this.overlay) {
      this.overlay = document.createElement("div");
      this.overlay.classList.add("offcanvas-overlay");
      document.body.appendChild(this.overlay);
    }

    this.element.classList.add("show");
    this.overlay.classList.add("show");
  }

  close() {
    this.element.classList.remove("show");
    if (this.overlay) {
      this.overlay.classList.remove("show");
      this.overlay.remove()
      this.overlay = null
    }
  }

  toggle() {
    if (this.element.classList.contains("show")) {
      this.close();
    } else {
      this.open();
    }
  }

  static name = "offcanvas";

  static injector(element, action, data = {}) {
    let component = new TurtleUIOffcanvas(element);
    switch (action) {
      case "open":
        component.open();
        break;
      case "close":
        component.close();
        break;
      case "toggle":
        component.toggle();
        break;
      default:
        break;
    }
  }
}