import { logError } from './helpers/logging.js';

export class SoundPlayer {
  private audio: HTMLAudioElement;
  
  constructor(src: string) {
    this.audio = new Audio(src);
  }
  
  play(onEnd?: () => void): void {
    console.log('[SoundPlayer] play called, audio src:', this.audio.src);
    this.audio.currentTime = 0;
    this.audio.play().catch((e) => logError('Audio error', e));
    
    if (typeof onEnd === 'function') {
      this.audio.onended = onEnd;
    }
  }
}