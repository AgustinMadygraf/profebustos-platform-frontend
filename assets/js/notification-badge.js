// Servicio para mostrar y ocultar el badge de notificación
export class NotificationBadge {
  constructor(badgeElement) {
    this.badge = badgeElement;
  }
  show(count = 1) {
    if (this.badge) {
      this.badge.textContent = count;
      this.badge.classList.remove("d-none");
    }
  }
  hide() {
    if (this.badge) {
      this.badge.classList.add("d-none");
    }
  }
}
