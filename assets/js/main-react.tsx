import React from 'react';
import { createRoot } from 'react-dom/client';

import { NotificationBadge } from './components/NotificationBadge';
import { useNotificationBadgeEventBus } from './services/notification-badge-eventbus';
import { ChatBotUIReact } from './components/ChatBotUIReact';
import { EventBus } from './helpers/event-bus';

// Instancia global del EventBus (puedes compartirla con el resto de la app)
const eventBus = new EventBus();

function NotificationBadgeEventBusMount() {
  const { count, visible } = useNotificationBadgeEventBus(eventBus);
  return <NotificationBadge count={count} visible={visible} />;
}


// Montar NotificationBadge
const badgeContainer = document.getElementById('whatsapp-badge');
if (badgeContainer) {
  const root = createRoot(badgeContainer);
  root.render(<NotificationBadgeEventBusMount />);
}

// Montar ChatBotUIReact
const chatContainer = document.getElementById('whatsapp-chat');
if (chatContainer) {
  const root = createRoot(chatContainer);
  root.render(<ChatBotUIReact eventBus={eventBus} />);
}

// Ejemplo: el bot responde tras recibir un mensaje
eventBus.on('user:sendMessage', (msg: string) => {
  setTimeout(() => {
    eventBus.emit('bot:message', '¡Hola! Recibí: ' + msg);
    eventBus.emit('ui:showBadge', 1);
  }, 1000);
});
