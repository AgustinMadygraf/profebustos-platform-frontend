import { IUIFacade } from './interfaces';
// Facade para acceso testable al DOM
export class DomFacade implements IUIFacade {
  getById(id: string): HTMLElement | null {
    return document.getElementById(id);
  }

  createElement(tag: string): HTMLElement {
    return document.createElement(tag);
  }

  addClass(element: HTMLElement, className: string): void {
    element.classList.add(className);
  }

  removeClass(element: HTMLElement, className: string): void {
    element.classList.remove(className);
  }

  appendChild(parent: HTMLElement, child: HTMLElement): void {
    parent.appendChild(child);
  }
}
