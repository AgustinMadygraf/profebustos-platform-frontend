import { ChatBotUI } from '../ui/chatbot-ui';

describe('ChatBotUI', () => {
  let ui: ChatBotUI;
  beforeEach(() => {
    document.body.innerHTML = `
      <div id="whatsapp-icon"></div>
      <div id="whatsapp-chat" class="d-none"></div>
      <div id="whatsapp-badge"></div>
      <button id="whatsapp-close"></button>
      <button id="whatsapp-back"></button>
      <div id="bot-typing"></div>
      <div id="bot-message"></div>
      <input id="whatsapp-user-input" />
      <button id="whatsapp-send-btn"></button>
      <div id="whatsapp-messages"></div>
    `;
    ui = new ChatBotUI();
  });

  it('debe mostrar el mensaje del usuario en el chat', () => {
    ui.showUserMessage('Hola mundo');
    expect(ui.messagesContainer?.textContent).toContain('Hola mundo');
  });

  it('debe mostrar el chat y ocultar el icono y badge', () => {
    ui.showChat();
    expect(ui.chat?.classList.contains('d-none')).toBe(false);
    expect(ui.icon?.classList.contains('d-none')).toBe(true);
    expect(ui.badge?.classList.contains('d-none')).toBe(true);
  });

  it('debe ocultar el chat y mostrar el icono', () => {
    ui.hideChat();
    expect(ui.chat?.classList.contains('d-none')).toBe(true);
    expect(ui.icon?.classList.contains('d-none')).toBe(false);
  });

  it('debe actualizar el texto de botTyping', () => {
    ui.setBotTyping('escribiendo...');
    expect(ui.botTyping?.textContent).toBe('escribiendo...');
  });
});
