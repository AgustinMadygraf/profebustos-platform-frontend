import { logError } from './helpers/logging.js';
import { AudioFacade } from './helpers/audio-facade.js';

export class SoundPlayer {
  private audio: HTMLAudioElement;
  private facade: AudioFacade;

  constructor(src: string, facade?: AudioFacade) {
    this.facade = facade || new AudioFacade();
    this.audio = this.facade.create(src);
  }

  play(onEnd?: () => void): void {
    console.log('[SoundPlayer] play called, audio src:', this.audio.src);
    this.facade.setCurrentTime(this.audio, 0);
    this.facade.play(this.audio).catch((e) => logError('Audio error', e));

    if (typeof onEnd === 'function') {
      this.facade.setOnEnded(this.audio, onEnd);
    }
  }
}