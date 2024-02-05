import { MainOverlayControl } from "../mainOverlayControl.js"
export class TurtleUIAccordion {
  constructor(element) {
    this._element = element
  }

  static generate(element) {
    return new TurtleUIAccordion(element)
  }

  static actions = {
    toggle: {
      "accordion": function(target, data) {
        let accordion = TurtleUIAccordion.generate(target)
        accordion.toggle()
      }
    }
  }


  open() {

    this._element.classList.add("active")
  }


  close() {

    this._element.classList.remove("active")
  }

  toggle() {
    this._element.classList.contains("active") ? this.close() : this.open()
  }
}