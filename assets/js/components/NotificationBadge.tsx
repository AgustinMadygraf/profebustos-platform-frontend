import React from 'react';

interface NotificationBadgeProps {
  count?: number;
  visible?: boolean;
}

export const NotificationBadge: React.FC<NotificationBadgeProps> = ({ count = 1, visible = true }) => {
  if (!visible) return null;
  return (
    <span className="badge bg-success position-absolute top-0 end-0 translate-middle">
      {count}
    </span>
  );
};
