// Servicio para mostrar y ocultar el badge de notificación
export class NotificationBadge {
  constructor(badgeElement) {
    this._badge = badgeElement;
  }
  show(count = 1) {
    if (this._badge) {
      console.log(
        '[NotificationBadge] show called, count:',
        count,
        'classList:',
        this._badge.classList.value,
        'text:',
        this._badge.textContent,
      );
      this._badge.textContent = count;
      this._badge.classList.remove('d-none');
      console.log(
        '[NotificationBadge] after show, classList:',
        this._badge.classList.value,
        'text:',
        this._badge.textContent,
      );
    }
  }
  hide() {
    if (this._badge) {
      console.log(
        '[NotificationBadge] hide called, classList:',
        this._badge.classList.value,
        'text:',
        this._badge.textContent,
      );
      this._badge.classList.add('d-none');
      this._badge.textContent = '';
      console.log(
        '[NotificationBadge] after hide, classList:',
        this._badge.classList.value,
        'text:',
        this._badge.textContent,
      );
    }
  }
}
