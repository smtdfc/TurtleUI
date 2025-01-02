export class TurtleUIToast {
  constructor(element, configs = {}) {
    this.element = element;
    this.configs = {
      duration: configs.duration || 3000,
      ...configs,
    };
    this.timeoutId = null;
  }

  show(message) {
    if (message) {
      this.element.textContent = message;
    }
    this.element.classList.add('show');
    this.timeoutId = setTimeout(() => this.hide(), this.configs.duration);
  }

  hide() {
    this.element.classList.remove('show');
    this.timeoutId = null;
  }

  toggle(message) {
    if (this.element.classList.contains('show')) {
      this.hide();
    } else {
      this.show(message);
    }
  }

  static name = 'toast';

  static injector(element, action, data = {}) {
    const component = new TurtleUIToast(element, data);
    switch (action) {
      case 'show':
        component.show(data.message);
        break;
      case 'hide':
        component.hide();
        break;
      case 'toggle':
        component.toggle(data.message);
        break;
      default:
        break;
    }
  }
}