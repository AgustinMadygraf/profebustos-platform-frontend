// Servicio para mostrar y ocultar el badge de notificación
import { INotificationBadge } from '../interfaces/INotificationBadge.js';
import { showElement, hideElement } from '../helpers/dom';
// Servicio para mostrar y ocultar el badge de notificación
export class NotificationBadge implements INotificationBadge {
  private _badge: HTMLElement | null;
  
  constructor(badgeElement: HTMLElement | null) {
    this._badge = badgeElement;
  }
  
  show(count: number = 1): void {
    if (this._badge) {
      this._badge.textContent = count.toString();
      showElement(this._badge);
    }
  }
  
  hide(): void {
    if (this._badge) {
      hideElement(this._badge);
      this._badge.textContent = '';
    }
  }
}