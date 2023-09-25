let count = 0
let special_components = {}

function genrateKey(prefix = "_") {
  return `${prefix}${(Math.floor(Math.random()*10000)*Date.now()).toString(16)}`
}

special_components.mainOverlay = document.createElement("div")
special_components.mainOverlay.className = "overlay"
special_components.mainOverlay.id = genrateKey()

special_components.mainToasts = document.createElement("div")
special_components.mainToasts.className = "toasts toasts-bottom"
special_components.mainToasts.id = genrateKey()


Object.keys(special_components).forEach(name => {
  document.body.appendChild(special_components[name])
})

class TurtleUIMainOverlayController {
  static openMainOverlay() {
    count++
    if (count > 1) return
    special_components.classList.add("active")
  }

  static closeMainOverlay() {
    count--
    if (count > 0) return
    if (count < 0) count = 0
    special_components.classList.remove("active")
  }
}

const Actions = {
  removeparent: function(target, data) {
    target.parentElement.remove()
  },

  toggle: function(target, data) {
    let toggle = data["toggle"]
    let element = document.querySelector(data[toggle])
    let state = element.classList.contains("active")
    element.classList.toggle("active")
    if (["offcanvas"].includes(toggle)) {
      if (state) TurtleUIMainOverlayController.closeMainOverlay()
      else TurtleUIMainOverlayController.openMainOverlay()
    }
  },
  openTab: function(target, data) {
    let tab = document.querySelector(data["opentab"])
    let idx = parseInt(data["idx"]) || 0
    let tabItems = tab.querySelector(".tab-items")
    let tabContents = tab.querySelector(".tab-contents")
    for (let i = 0; i < tabItems.children.length; i++) {
      tabItems.children[i].classList.remove("active")
      if (i == idx) {
        tabItems.children[i].scrollIntoView({ behavior: 'smooth', block: "end" })
        tabItems.children[i].classList.add("active")
      }
    }

    for (let i = 0; i < tabContents.children.length; i++) {
      tabContents.children[i].classList.remove("active")
      if (i == idx) tabContents.children[i].classList.add("active")
    }

  }
}

window.addEventListener("click", function(e) {
  try {
    let target = e.target
    let ele = target.parentElement.parentElement
    if (ele.classList.contains("navbar-menu") || ele.classList.contains("offcanvas-nav-menu") || ele.classList.contains("sidebar-menu")) {
      target.parentElement.classList.toggle("open")
    }
  } catch (e) {}
  if (e.target.dataset["toggle"]) {
    Actions.toggle(e.target, e.target.dataset)
  }

  if (e.target.dataset["removeparent"]) {
    Actions.removeparent(e.target, e.target.dataset)
  }

  if (e.target.dataset["opentab"]) {
    Actions.openTab(e.target, e.target.dataset)
  }
})

export class TurtleUIModule {
  constructor(app) {
    this.app = app
    this.actions = Actions
    this.mainOverlay = TurtleUIMainOverlayController
    this.app.ui = this
  }
  
  addMsg(msg,level="info",timeout=1500){
    if(level =="error") level = "danger"
    let toast = document.createElement("div")
    toast.className =`toast toast-${level}`
    toast.id = genrateKey("toast_")
    toast.innerHTML  = `
      <div class="toast-contents">${msg}</div>
    `
    special_components.mainToasts.appendChild(toast)
    setTimeout(()=>{
      toast.remove()
    },timeout)
    return toast
  }
  
  init() {}
}
