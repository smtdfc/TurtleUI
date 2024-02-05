import { MainOverlayControl } from "../mainOverlayControl.js"
export class TurtleUIBottomSheet {
  constructor(element) {
    this._element = element
  }

  static generate(element) {
    return new TurtleUIBottomSheet(element)
  }

  static actions = {
    toggle: {
      "bottom_sheet": function(target, data) {
        let bottomSheet = TurtleUIBottomSheet.generate(target)
        bottomSheet.toggle()
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