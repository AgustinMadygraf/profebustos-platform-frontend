import React, { useEffect, useRef, useState } from 'react';
import { EventBus } from '../helpers/event-bus';

interface Message {
  from: 'user' | 'bot';
  text: string;
}

export const ChatBotUIReact: React.FC<{ eventBus: EventBus }> = ({ eventBus }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Escuchar mensajes del bot
    const handler = (text: string) => {
      setMessages((msgs) => [...msgs, { from: 'bot', text }]);
    };
    eventBus.on('bot:message', handler);
    return () => {
      eventBus.off('bot:message', handler);
    };
  }, [eventBus]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (input.trim()) {
      setMessages((msgs) => [...msgs, { from: 'user', text: input }]);
      eventBus.emit('user:sendMessage', input);
      setInput('');
    }
  };

  return (
    <div className="chatbot-ui-react border rounded p-2" style={{ width: 350, height: 420, display: 'flex', flexDirection: 'column' }}>
      <div className="flex-grow-1 overflow-auto mb-2" style={{ maxHeight: 340 }}>
        {messages.map((msg, i) => (
          <div key={i} className={msg.from === 'user' ? 'text-end text-primary' : 'text-start text-success'}>
            {msg.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="d-flex gap-2">
        <input
          className="form-control"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSend()}
          placeholder="Escribe tu mensaje..."
        />
        <button className="btn btn-success" onClick={handleSend}>Enviar</button>
      </div>
    </div>
  );
};
