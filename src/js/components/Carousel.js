export class TurtleUICarousel {
  constructor(element, configs = {}) {
    this.element = element;
    this.configs = configs;
    this.carouselImages = element.querySelector('.carousel-images');
    this.images = element.querySelectorAll('.carousel-image');
    this.currentIndex = 0;
    this.touchStartX = 0;
    this.touchEndX = 0;
    if (!this.element._turtleui) {
      this.element._turtleui = {
        "carousel": {
          currentIndex: this.currentIndex
        }
      }
    } else {
      this.currentIndex = this.element._turtleui.carousel.currentIndex
    }
    this.enableSwipe()
  }

  enableSwipe() {
    this.carouselImages.addEventListener('touchstart', (event)=>{
      this.touchStartX = event.touches[0].clientX; 
    });
    
    this.carouselImages.addEventListener('touchend', (event)=>{
      this.touchEndX = event.changedTouches[0].clientX; 
      this.handleSwipe()
    });
  }

  sync() {
    if (!this.element._turtleui) {
      this.element._turtleui = {
        "carousel": {
          currentIndex: this.currentIndex
        }
      }
    } else {
      this.element._turtleui.carousel.currentIndex = this.currentIndex
    }
  }

  updateCarousel() {
    const offset = -this.currentIndex * 100;
    this.carouselImages.style.transform = `translateX(${offset}%)`;
    this.sync()
  }

  handleSwipe() {
    if (this.touchStartX > this.touchEndX) { // Swipe left
      this.next();
    } else if (this.touchStartX < this.touchEndX) { // Swipe right
      this.prev();
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.images.length - 1;
    }
    this.updateCarousel();
  }

  next() {
    if (this.currentIndex < this.images.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
    this.updateCarousel();
  }

  static name = "carousel";

  static injector(element, action, data = {}) {
    let component = new TurtleUICarousel(element, data);
    switch (action) {
      case 'next':
        component.next();
        break;
      case 'prev':
        component.prev();
        break;
      case 'goTo':
        component.goTo(data.index);
        break;
      default:
        break;
    }
  }
}