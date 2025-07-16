import { IAudioFacade } from './interfaces';
// Facade para acceso testable a Audio
export class AudioFacade implements IAudioFacade {
  create(src: string): HTMLAudioElement {
    return new Audio(src);
  }

  play(audio: HTMLAudioElement): Promise<void> {
    return audio.play();
  }

  setCurrentTime(audio: HTMLAudioElement, time: number): void {
    audio.currentTime = time;
  }

  setOnEnded(audio: HTMLAudioElement, handler: () => void): void {
    audio.onended = handler;
  }
}
