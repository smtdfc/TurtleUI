export class TurtleUISidebar {
  constructor(element) {
    this._element = element
  }

  static generate(element) {
    return new TurtleUISidebar(element)
  }

  static actions = {
    toggle: {
      "sidebar": function(target, data) {
        let sidebar = TurtleUISidebar.generate(target)
        sidebar.toggle()
      }
    }
  }


  open() {
    this._element.classList.add("active")
    if (matchMedia("(min-width: 48rem)").matches && this._element.classList.contains("sidebar-icon")) {
      setTimeout(() =>{
        this._element.querySelectorAll(".text").forEach(e => e.style.display = "block")
      }, 300)
    }

  }


  close() {
    if (matchMedia("(min-width: 48rem)").matches && this._element.classList.contains("sidebar-icon")) {
      this._element.querySelectorAll(".text").forEach(e => e.style.display = "none")
    }
    this._element.classList.remove("active")
      this._element.querySelectorAll(".open").forEach(e => e.classList.remove("open"))

  }

  toggle() {
    this._element.classList.contains("active") ? this.close() : this.open()
  }
}