import { DomFacade } from '../helpers/dom-facade';

describe('DomFacade', () => {
  let facade: DomFacade;
  beforeEach(() => {
    facade = new DomFacade();
    document.body.innerHTML = '<div id="test"></div>';
  });

  it('getById devuelve el elemento por id', () => {
    const el = facade.getById('test');
    expect(el).not.toBeNull();
    expect(el?.id).toBe('test');
  });

  it('createElement crea un nuevo elemento', () => {
    const el = facade.createElement('span');
    expect(el.tagName).toBe('SPAN');
  });

  it('addClass y removeClass modifican clases', () => {
    const el = facade.getById('test');
    facade.addClass(el!, 'foo');
    expect(el?.classList.contains('foo')).toBe(true);
    facade.removeClass(el!, 'foo');
    expect(el?.classList.contains('foo')).toBe(false);
  });

  it('appendChild agrega hijo al padre', () => {
    const parent = facade.getById('test');
    const child = facade.createElement('span');
    facade.appendChild(parent!, child);
    expect(parent?.contains(child)).toBe(true);
  });
});
