let count = 0
let main_overlay = null

function openMainOverlay() {
  if (count == 0) {
    main_overlay = document.createElement("div")
    main_overlay.classList.add("overlay")
    main_overlay.classList.add("active")
    document.body.appendChild(main_overlay)
  }
  count++
}

function closeMainOverlay() {
  count--;
  if (count <= 0) {
    count = 0
    try {
      main_overlay.remove()
    } catch (err) {}
  }
}

function hasClasses(element, classes = []) {
  let passed = false
  classes.forEach(className => {
    if (element.classList.contains(className)) passed = true
  })
  return passed
}

const Actions = {
  "toggle": function(args) {
    let component = document.querySelector(args.toggle)
    component.classList.toggle("active")
    let state = component.classList.contains("active")
    if (hasClasses(component, [
        "offcanvas"
      ])) {
      if (state) openMainOverlay()
      else closeMainOverlay()
    }
  },
  "removeparent": function(args, ctx) {
    ctx.parentElement.remove()
  },
  "opentab": function(args, ctx) {
    let tab = document.querySelector(args.opentab)
    let idx = parseInt(args.idx)
    if (isNaN(idx)) return
    let tab_items = tab.querySelector(".tab-items").children
    let tab_contents = tab.querySelector(".tab-contents").children
    for (let i = 0; i < tab_items.length; i++) {
      if (i == idx) tab_items.item(i).classList.add("active")
      else tab_items.item(i).classList.remove("active")
    }
    
    for (let i = 0; i < tab_contents.length; i++) {
      if (i == idx) tab_contents.item(i).classList.add("active")
      else tab_contents.item(i).classList.remove("active")
    }
  }
}

window.addEventListener("click", function(e) {

  let args = e.target.dataset
  if (args.toggle) {
    Actions.toggle(args, e.target)
  }

  if (args.removeparent) {
    Actions.removeparent(args, e.target)
  }

  if (args.opentab) {
    Actions.opentab(args, e.target)
  }
})