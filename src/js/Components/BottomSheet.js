import { generateKey, getElement ,createElement} from "../utils.js"


export class BottomSheet {
  constructor(element) {
    this.component = getElement(element)
    this.contents = getElement(".bottom-sheet-contents", this.component) || createElement('div', 'modal-contents')
    this.id = generateKey("bottom_sheet_")
  }

  

  static actions = {
    "tToggle": function(target, data) {
      let modal = new BottomSheet(data.tTarget)
      modal.toggle()
    }
  }
  
  

  open() {
    this.component.style.display = "block"
    setTimeout(() => {
      this.contents.classList.add("active")
    }, 300)
    
    let ctx = this
    function close(){
      ctx.close()
    }
    this.component.addEventListener("click",function(){
      close()
      ctx.component.removeEventListener("click",close)
    })
    
  }

  close() {
    this.contents.classList.remove("active")
    
    setTimeout(() => {
      this.component.style.display = "none"
    }, 400)
  }

  toggle() {
    if (this.component.classList.contains("active")) {
      this.close()
    } else {
      this.open()
    }
  }

  attach(element) {
    (getElement(element) || createElement("div")).appendChild(this.component)
  }
}