// Servicio para reproducir sonidos de notificación
import { logError } from './helpers/logging.js';
export class SoundPlayer {
  constructor(src) {
    this.audio = new Audio(src);
  }
  play(onEnd) {
    this.audio.currentTime = 0;
    this.audio.play().catch((e) => logError('Audio error', e));
    if (typeof onEnd === 'function') {
      this.audio.onended = onEnd;
    }
  }
}
