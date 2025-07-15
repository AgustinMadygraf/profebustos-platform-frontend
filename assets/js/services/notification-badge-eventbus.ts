import { useEffect, useState } from 'react';
import { EventBus } from '../helpers/event-bus';

export function useNotificationBadgeEventBus(eventBus: EventBus) {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = (newCount: number = 1) => {
      setCount(newCount);
      setVisible(newCount > 0);
    };
    eventBus.on('ui:showBadge', handler);
    return () => {
      eventBus.off('ui:showBadge', handler);
    };
  }, [eventBus]);

  return { count, visible };
}
