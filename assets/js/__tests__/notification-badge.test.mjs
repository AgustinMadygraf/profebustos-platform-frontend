// Prueba unitaria básica para NotificationBadge
import { NotificationBadge } from '../notification-badge.js';

describe('NotificationBadge', () => {
  let badgeElem;
  let badge;

  beforeEach(() => {
    document.body.innerHTML = '<span id="badge" class="d-none"></span>';
    badgeElem = document.getElementById('badge');
    badge = new NotificationBadge(badgeElem);
  });

  test('show() muestra el badge con el número', () => {
    badge.show(1);
    expect(badgeElem.classList.contains('d-none')).toBe(false);
    expect(badgeElem.textContent).toBe('1');
  });

  test('hide() oculta el badge', () => {
    badge.show(2);
    badge.hide();
    expect(badgeElem.classList.contains('d-none')).toBe(true);
  });
});
