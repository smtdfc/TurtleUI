import * as components from "./components/index.js"

window.addEventListener("click", function(e) {
  if (e.target.classList.contains("submenu")) {
    document.getElementsByClassName("submenu").forEach(element => {
      if (element !== e) element.classList.remove("submenu")
    })
    e.target.classList.toggle("open")
  }
})

const COMPONENTS = [
  components.TurtleUINavbar,
  components.TurtleUISidebar,
  components.TurtleUIOffcanvas,
  components.TurtleUIModal,
  components.TurtleUIBottomSheet,
  components.TurtleUIAccordion,
  components.TurtleUITab
]

window.addEventListener("click", function(event) {
  // event.stopPropagation()
  if (event.target) {

    let target = event.target
    if (target.dataset.tToggle) {

      let toggleType = target.dataset.tToggle
      let toggleTarget = document.querySelector(target.dataset.tTarget)
      COMPONENTS.forEach(component => {
        if (component.actions.toggle && component.actions.toggle[toggleType]) {
          component.actions.toggle[toggleType](toggleTarget)
        }
      })
    }

    if (target.dataset.tOpen) {

      let component_ = target.dataset.tOpen
      let target_ = document.querySelector(target.dataset.tTarget)
      COMPONENTS.forEach(component => {
        if (component.actions.open && component.actions.open[component_]) {
          component.actions.open[component_](target_, target, target.dataset)
        }
      })
    }
  }
}, { capture: true })