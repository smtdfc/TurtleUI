import {MainOverlayControl} from "../mainOverlayControl.js"
export class TurtleUIOffcanvas {
  constructor(element) {
    this._element = element
  }

  static generate(element) {
    return new TurtleUIOffcanvas(element)
  }

  static actions = {
    toggle: {
      "offcanvas": function(target, data) {
        let offcanvas = TurtleUIOffcanvas.generate(target)
        offcanvas.toggle()
      }
    }
  }


  open() {
    MainOverlayControl.open()
    this._element.classList.add("active")
  }


  close() {
    MainOverlayControl.close()
    this._element.classList.remove("active")
  }

  toggle() {
    this._element.classList.contains("active") ? this.close():  this.open()
  }
}