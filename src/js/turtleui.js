import * as mainOverlay from "./mainOverlay.js"
import * as actions from "./actions.js"
export * from "./mainToast.js"
export * from "./components/index.js"

window.addEventListener("click", function(event) {
  if (event.target) {
    let target = event.target
   // console.log(target)
    if (target.tagName == "A") {
      if(target.parentElement.classList.contains("sidebar-nav-item")){
        
        if (target.parentElement.querySelector("ul")) {
          
          target.parentElement.querySelector("ul").classList.toggle("open")
        }
      }
      
      if (target.parentElement.classList.contains("navbar-menu-item")) {
        if(target.parentElement.querySelector("ul")){
          target.parentElement.querySelector("ul").classList.toggle("open")
        }
      }
    }
  }
  
  
})

window.TurtleUIData={
  mainOverlayCount:0
}