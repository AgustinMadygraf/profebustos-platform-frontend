// Interfaces para servicios UI, Audio y Badge

export interface IUIFacade {
  getById(id: string): HTMLElement | null;
  createElement(tag: string): HTMLElement;
  addClass(element: HTMLElement, className: string): void;
  removeClass(element: HTMLElement, className: string): void;
  appendChild(parent: HTMLElement, child: HTMLElement): void;
}

export interface IAudioFacade {
  create(src: string): HTMLAudioElement;
  play(audio: HTMLAudioElement): Promise<void>;
  setCurrentTime(audio: HTMLAudioElement, time: number): void;
  setOnEnded(audio: HTMLAudioElement, handler: () => void): void;
}

export interface IBadgeService {
  show(count: number): void;
  hide(): void;
  set(count: number): void;
}
