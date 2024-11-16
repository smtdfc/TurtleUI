export class TurtleUICombobox {
  constructor(element, configs = {}) {
    this.element = element
    this.configs = configs
  }

  addItem(item,parentQuery="") {
    let tempDiv = document.createElement('div');
    tempDiv.innerHTML = `
      <span>${item}</span>
      <span data-taction="combobox:remove:${parentQuery}" class="combobox-close-btn">×</span>
    `;
    tempDiv.className ="combobox-item"
    this.element.querySelectorAll(".combobox-items")[0].appendChild(tempDiv)
  }
  
  remove(target) {
    target.remove()
  }

  select(element) {
    element.classList.toggle("active")
  }

  add(element,data) {
    
    if (element.dataset.tdata) {
      this.addItem(element.dataset.tdata,data.id)
    } else {
      this.addItem(element.textContent,data.id)
    }
  }

  static name = "combobox"
  static injector(element, action, data = {}, target) {

    let component = new TurtleUICombobox(element)
    switch (action) {
      case 'remove':
        component.remove(target.parentElement)
        break;
      case 'select':
        component.select(element)
        break;
      case 'add':
        component.add(target,data)
        break;

      default:
        break
    }
  }
}