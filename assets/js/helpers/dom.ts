// helpers/dom.ts
// Funciones reutilizables para manipulación del DOM en la UI

export function getElement(id: string): HTMLElement | null {
  return document.getElementById(id);
}

export function showElement(el: HTMLElement) {
  el.classList.remove('d-none');
}

export function hideElement(el: HTMLElement) {
  el.classList.add('d-none');
}

export function toggleElement(el: HTMLElement, visible: boolean) {
  el.classList.toggle('d-none', !visible);
}

export function setElementStyle(el: HTMLElement, styles: Partial<CSSStyleDeclaration>) {
  Object.assign(el.style, styles);
}

export function createDiv(className?: string): HTMLDivElement {
  const div = document.createElement('div');
  if (className) div.className = className;
  return div;
}
