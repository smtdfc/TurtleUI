import { MainOverlayControl } from "../mainOverlayControl.js"
export class TurtleUITab {
  constructor(element) {
    
    this._element = element
    this.tabItems = this._element.querySelector(".tab-items") || document.createElement("ul", "tab-items")

  }

  static generate(element) {
    return new TurtleUITab(element)
  }

  static actions = {
    open: {
      "tab": function(tab_, target, data) {
        let tab = TurtleUITab.generate(tab_)
        let idx = tab.getItemIndex(target)
        tab.open(idx)
      }
    }
  }


  getItemIndex(item) {
    let p = -Infinity
    
    Array.from(this.tabItems.children).forEach((child, idx) => {
      if (child === item) p = idx
    })
    return p
  }

  current() {
    let p = -Infinity
    Array.from(this.tabItems.children).forEach((child, idx) => {
      if (child.classList.contains("active")) p = idx
    })
    return p
  }

  reset() {
    Array.from(this.tabItems.children).forEach(child => {
      child.classList.remove("active")
      if (child.dataset.tBind) {
        let contents = document.querySelector(child.dataset.tBind) || document.createElement("div")
        contents.classList.remove("active")
      }
    })
  }

  open(index) {

    Array.from(this.tabItems.children).forEach((child, i) => {
      if (index == i) {
        child.classList.add("active")
        if (child.dataset.tBind) {
          let contents = document.querySelector(child.dataset.tBind) || document.createElement("div")
          contents.classList.add("active")
        }
      } else {
        child.classList.remove("active")
        if (child.dataset.tBind) {
          let contents = document.querySelector(child.dataset.tBind) || document.createElement("div")
          contents.classList.remove("active")
        }
      }
    })

  }
}