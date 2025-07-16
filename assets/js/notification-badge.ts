import { IBadgeService } from './helpers/interfaces';
// Servicio para mostrar y ocultar el badge de notificación
export class NotificationBadge implements IBadgeService {
  private _badge: HTMLElement | null;
  
  constructor(badgeElement: HTMLElement | null) {
    this._badge = badgeElement;
  }
  
  show(count: number = 1): void {
    if (this._badge) {
      console.log(
        '[NotificationBadge] show called, count:',
        count,
        'classList:',
        this._badge.classList.value,
        'text:',
        this._badge.textContent,
      );
      this._badge.textContent = count.toString();
      this._badge.classList.remove('d-none');
      console.log(
        '[NotificationBadge] after show, classList:',
        this._badge.classList.value,
        'text:',
        this._badge.textContent,
      );
    }
  }
  
  set(count: number): void {
    if (this._badge) {
      this._badge.textContent = count.toString();
    }
  }

  hide(): void {
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