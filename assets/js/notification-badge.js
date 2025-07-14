// Servicio para mostrar y ocultar el badge de notificación
export class NotificationBadge {
  constructor(badgeElement) {
    this._badge = badgeElement;
  }
  show(count = 1) {
    if (this._badge) {
      this._badge.textContent = count;
      this._badge.classList.remove('d-none');
    }
  }
  hide() {
    if (this._badge) {
      this._badge.classList.add('d-none');
    }
  }
  _reset() {
    if (this._badge) {
      this._badge.textContent = '';
      this._badge.classList.add('d-none');
    }
  }
}
