export class TurtleUIModal {
  constructor(element) {
    this.element = element;
    this.modalContents = element.querySelector('.modal-contents');
    this.animationDuration = this.getAnimationDuration();
  }

  getAnimationDuration() {
    return parseFloat(getComputedStyle(this.element)
      .getPropertyValue('--modal-animation-duration')) * 1000;
  }

  open() {
    this.element.classList.add("active");
    this.element.classList.remove("closing");
    this.modalContents.style.animation = `animZoomOut ${this.animationDuration}ms forwards`;
  }

  close() {
    this.modalContents.style.animation = `animZoomIn ${this.animationDuration}ms forwards`;
    this.element.classList.add("closing");
    setTimeout(() => {
      this.element.classList.remove("active");
      this.element.classList.remove("closing");
      this.modalContents.style.animation = ''; // Đặt lại hiệu ứng
    }, this.animationDuration);
  }

  toggle() {
    if (this.element.classList.contains("active")) {
      this.close();
    } else {
      this.open();
    }
  }

  static injector(element, action) {
    
    let target = new TurtleUIModal(element);
    switch (action) {
      case 'toggle':
        target.toggle();
        break;
      default:
        break;
    }
  }

  static name = "modal";
}