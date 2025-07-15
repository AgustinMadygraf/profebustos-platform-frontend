// Interfaz para servicio de notificación
export interface INotificationBadge {
  show(count?: number): void;
  hide(): void;
}
