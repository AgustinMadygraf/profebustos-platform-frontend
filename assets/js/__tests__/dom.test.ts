import * as dom from '../helpers/dom';

describe('dom helpers', () => {
  let el: HTMLElement;
  beforeEach(() => {
    document.body.innerHTML = '<div id="test"></div>';
    el = document.getElementById('test')!;
  });

  it('getElement debe retornar el elemento por id', () => {
    expect(dom.getElement('test')).toBe(el);
  });

  it('showElement debe remover d-none', () => {
    el.classList.add('d-none');
    dom.showElement(el);
    expect(el.classList.contains('d-none')).toBe(false);
  });

  it('hideElement debe agregar d-none', () => {
    dom.hideElement(el);
    expect(el.classList.contains('d-none')).toBe(true);
  });

  it('toggleElement debe alternar d-none según visible', () => {
    dom.toggleElement(el, true);
    expect(el.classList.contains('d-none')).toBe(false);
    dom.toggleElement(el, false);
    expect(el.classList.contains('d-none')).toBe(true);
  });

  it('setElementStyle debe asignar estilos', () => {
    dom.setElementStyle(el, { width: '100px', height: '50px' });
    expect(el.style.width).toBe('100px');
    expect(el.style.height).toBe('50px');
  });

  it('createDiv debe crear un div con clase', () => {
    const div = dom.createDiv('my-class');
    expect(div.tagName).toBe('DIV');
    expect(div.className).toBe('my-class');
  });
});
