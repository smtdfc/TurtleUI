const main_toast = document.createElement("div")
main_toast.className = "toasts toasts-bottom"
main_toast.style.zIndex = 1000
document.body.appendChild(main_toast)

export const MainToast = {
  element: main_toast,
  info: function(msg, time = 5000) {
    let toast_element = document.createElement("div")
    toast_element.innerHTML = `<div class="toast-body">${msg}</div>`
    toast_element.className = "toast toast-info"
    this.element.appendChild(toast_element)
    setTimeout(() => {
      toast_element.remove()
    }, time)
  },
  success: function(msg, time = 5000) {
    let toast_element = document.createElement("div")
    toast_element.innerHTML = `<div class="toast-body">${msg}</div>`
    toast_element.className = "toast toast-success"
    this.element.appendChild(toast_element)
    setTimeout(() => {
      toast_element.remove()
    }, time)
  },
  warn: function(msg, time = 5000) {
    let toast_element = document.createElement("div")
    toast_element.innerHTML = `<div class="toast-body">${msg}</div>`
    toast_element.className = "toast toast-warn"
    this.element.appendChild(toast_element)
    setTimeout(() => {
      toast_element.remove()
    }, time)
  },
  danger: function(msg, time = 5000) {
    let toast_element = document.createElement("div")
    toast_element.innerHTML = `<div class="toast-body">${msg}</div>`
    toast_element.className = "toast toast-danger"
    this.element.appendChild(toast_element)
    setTimeout(() => {
      toast_element.remove()
    }, time)
  },

}

