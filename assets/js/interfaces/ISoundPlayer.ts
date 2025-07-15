// Interfaz para servicio de sonido
export interface ISoundPlayer {
  play(onEnd?: () => void): void;
}
