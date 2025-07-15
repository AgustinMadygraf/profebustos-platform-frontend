import { NotificationBadge } from '../services/notification-badge';

describe('NotificationBadge', () => {
  let badgeEl: HTMLElement;
  let badge: NotificationBadge;

  beforeEach(() => {
    document.body.innerHTML = '<span id="badge"></span>';
    badgeEl = document.getElementById('badge')!;
    badge = new NotificationBadge(badgeEl);
  });

  it('debe mostrar el badge con el número correcto', () => {
    badge.show(5);
    expect(badgeEl.textContent).toBe('5');
    expect(badgeEl.classList.contains('d-none')).toBe(false);
  });

  it('debe ocultar el badge y limpiar el texto', () => {
    badge.show(2);
    badge.hide();
    expect(badgeEl.classList.contains('d-none')).toBe(true);
    expect(badgeEl.textContent).toBe('');
  });
});
