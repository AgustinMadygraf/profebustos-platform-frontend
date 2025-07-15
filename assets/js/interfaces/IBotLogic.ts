// Interfaz para la lógica de dominio
export interface IBotLogic {
  startBotTyping(): void;
  streamBotResponse(t: string): void;
}
