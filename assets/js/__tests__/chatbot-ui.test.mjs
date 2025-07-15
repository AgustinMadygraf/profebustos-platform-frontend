import { ChatBotUI } from '../chatbot-ui';

describe('ChatBotUI', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div id="whatsapp-icon"></div>
      <div id="whatsapp-chat"></div>
      <div id="whatsapp-badge"></div>
      <button id="whatsapp-close"></button>
      <button id="whatsapp-back"></button>
      <div id="bot-typing"></div>
      <div id="bot-message"></div>
      <input id="whatsapp-user-input" />
      <button id="whatsapp-send-btn"></button>
      <div id="whatsapp-messages"></div>
    `;
  });

  it('asigna correctamente las propiedades del DOM en el constructor', () => {
    const ui = new ChatBotUI();
    expect(ui.icon).toBe(document.getElementById('whatsapp-icon'));
    expect(ui.chat).toBe(document.getElementById('whatsapp-chat'));
    expect(ui.badge).toBe(document.getElementById('whatsapp-badge'));
    expect(ui.closeBtn).toBe(document.getElementById('whatsapp-close'));
    expect(ui.backBtn).toBe(document.getElementById('whatsapp-back'));
    expect(ui.botTyping).toBe(document.getElementById('bot-typing'));
    expect(ui.botMessageDiv).toBe(document.getElementById('bot-message'));
    expect(ui.userInput).toBe(document.getElementById('whatsapp-user-input'));
    expect(ui.sendBtn).toBe(document.getElementById('whatsapp-send-btn'));
    expect(ui.messagesContainer).toBe(document.getElementById('whatsapp-messages'));
  });

  it('showChat muestra el chat y oculta el icono y el badge', () => {
    const ui = new ChatBotUI();
    ui.chat.classList.add('d-none');
    ui.icon.classList.remove('d-none');
    ui.badge.classList.remove('d-none');
    ui.showChat();
    expect(ui.chat.classList.contains('d-none')).toBe(false);
    expect(ui.icon.classList.contains('d-none')).toBe(true);
    expect(ui.badge.classList.contains('d-none')).toBe(true);
  });

  it('hideChat oculta el chat y muestra el icono, el badge depende del parámetro', () => {
    const ui = new ChatBotUI();
    ui.chat.classList.remove('d-none');
    ui.icon.classList.add('d-none');
    ui.badge.classList.add('d-none');
    ui.hideChat(true);
    expect(ui.chat.classList.contains('d-none')).toBe(true);
    expect(ui.icon.classList.contains('d-none')).toBe(false);
    expect(ui.badge.classList.contains('d-none')).toBe(true);
    ui.hideChat(false);
    expect(ui.badge.classList.contains('d-none')).toBe(false);
  });

  it('setBadge muestra u oculta el badge según el valor', () => {
    const ui = new ChatBotUI();
    ui.badge.classList.add('d-none');
    ui.setBadge(true);
    expect(ui.badge.classList.contains('d-none')).toBe(false);
    ui.setBadge(false);
    expect(ui.badge.classList.contains('d-none')).toBe(true);
  });

  it('showUserMessage agrega el mensaje al contenedor', () => {
    const ui = new ChatBotUI();
    ui.showUserMessage('Hola test');
    const mensajes = ui.messagesContainer.querySelectorAll('.user-message');
    expect(mensajes.length).toBe(1);
    expect(mensajes[0].textContent).toBe('Hola test');
  });

  it('setBotTyping cambia el texto del elemento botTyping', () => {
    const ui = new ChatBotUI();
    ui.setBotTyping('Escribiendo...');
    expect(ui.botTyping.textContent).toBe('Escribiendo...');
  });

  it('adjustChatSize aplica estilos para móvil', () => {
    const ui = new ChatBotUI();
    // Simular ventana móvil
    const originalInnerWidth = window.innerWidth;
    Object.defineProperty(window, 'innerWidth', { value: 500, configurable: true });
    ui.adjustChatSize();
    expect(ui.chat.style.width).toBe('100vw');
    expect(ui.chat.style.height).toBe('100vh');
    expect(ui.chat.style.borderRadius).toBe('0');
    Object.defineProperty(window, 'innerWidth', { value: originalInnerWidth, configurable: true });
  });

  it('adjustChatSize aplica estilos para escritorio', () => {
    const ui = new ChatBotUI();
    // Simular ventana escritorio
    const originalInnerWidth = window.innerWidth;
    Object.defineProperty(window, 'innerWidth', { value: 1024, configurable: true });
    ui.adjustChatSize();
    expect(ui.chat.style.width).toBe('350px');
    expect(ui.chat.style.height).toBe('420px');
    expect(ui.chat.style.borderRadius).toBe('1.5rem');
    Object.defineProperty(window, 'innerWidth', { value: originalInnerWidth, configurable: true });
  });
});
