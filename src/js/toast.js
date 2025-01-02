const Toast = {
  containerId: 'toast-container',
  duration: 3000,

  createToastContainer() {
    let container = document.getElementById(this.containerId);
    if (!container) {
      container = document.createElement('div');
      container.id = this.containerId;
      container.style.position = 'fixed';
      container.style.bottom = '20px';
      container.style.left = '50%';
      container.style.transform = 'translateX(-50%)';
      container.style.zIndex = '1000';
      container.style.display = 'flex';
      container.style.flexDirection = 'column';
      container.style.alignItems = 'center';
      document.body.appendChild(container);
    }
    return container;
  },

  createToast(message, type = 'primary') {
    const toast = document.createElement('div');
    toast.classList.add('toast', `toast-${type}`);
    toast.textContent = message;

    const container = this.createToastContainer();
    container.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('show');
    }, 0);

    return toast;
  },

  show(message, type = 'primary', customDuration) {
    const toast = this.createToast(message, type);
    const duration = customDuration || this.duration;

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        toast.remove();
      }, 500);
    }, duration);
  },

  setDuration(newDuration) {
    this.duration = newDuration;
  },

  showPrimary(message, customDuration) {
    this.show(message, 'primary', customDuration);
  },

  showSecondary(message, customDuration) {
    this.show(message, 'secondary', customDuration);
  },

  showSuccess(message, customDuration) {
    this.show(message, 'success', customDuration);
  },

  showInfo(message, customDuration) {
    this.show(message, 'info', customDuration);
  },

  showWarning(message, customDuration) {
    this.show(message, 'warning', customDuration);
  },

  showDanger(message, customDuration) {
    this.show(message, 'danger', customDuration);
  },

  showLight(message, customDuration) {
    this.show(message, 'light', customDuration);
  },

  showDark(message, customDuration) {
    this.show(message, 'dark', customDuration);
  },

  showMuted(message, customDuration) {
    this.show(message, 'muted', customDuration);
  },

  showTransparent(message, type = 'primary', customDuration) {
    const toast = this.createToast(message, type);
    toast.classList.add('transparent');
    const container = this.createToastContainer();
    container.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('show');
    }, 0);

    const duration = customDuration || this.duration;

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        toast.remove();
      }, 500);
    }, duration);
  }
};
