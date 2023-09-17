let count = 0
let mainOverlay = null
let mainOverlaySetup = {
  blurEffect: false,
  background: "rgba(0,0,0,0.4)"
}

function openMainOverlay() {
  count++
  if (count > 1) return
  mainOverlay = document.createElement("div")
  mainOverlay.style.setProperty("--overlay-bg", mainOverlaySetup.background)
  mainOverlay.className = `overlay ${mainOverlaySetup.blurEffect ? "blur" : ""} active `
  document.body.appendChild(mainOverlay)
}

function closeMainOverlay() {
  count--
  if (count > 0) return
  if (count < 0) count = 0
  mainOverlay.remove()
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
      if (state) closeMainOverlay()
      else openMainOverlay()
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
    this.mainOverlaySetup = mainOverlaySetup
  }

  init() {

  }


}