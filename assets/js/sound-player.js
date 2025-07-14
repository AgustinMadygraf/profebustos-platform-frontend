// Servicio para reproducir sonidos de notificación
export class SoundPlayer {
  constructor(src) {
    this.audio = new Audio(src);
  }
  play(onEnd) {
    this.audio.currentTime = 0;
    this.audio.play().catch(e => console.error("Audio error:", e));
    if (typeof onEnd === "function") {
      this.audio.onended = onEnd;
    }
  }
}
