import React, { useEffect, useState } from 'react';
import { NotificationBadge } from './NotificationBadge';

// Simulación de servicio externo (puedes reemplazarlo por el real)
interface NotificationBadgeService {
  subscribe: (cb: (count: number) => void) => void;
}

// Ejemplo de integración: recibe el servicio como prop
export const NotificationBadgeMount: React.FC<{ service: NotificationBadgeService }> = ({ service }) => {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    service.subscribe((newCount) => {
      setCount(newCount);
      setVisible(newCount > 0);
    });
  }, [service]);

  return <NotificationBadge count={count} visible={visible} />;
};
