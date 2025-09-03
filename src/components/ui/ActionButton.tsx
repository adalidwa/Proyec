// src/components/ui/ActionButton.tsx
// ============================================
// COMPONENTE ATÓMICO: Action Button (CTA)
// ============================================
import React from 'react';
import type { ActionButtonProps } from '../../types/header-institutional.types';
import './ActionButton.css';

export const ActionButton: React.FC<ActionButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  className = '',
  onClick,
  href,
}) => {
  const Component = href ? 'a' : 'button';

  return (
    <Component
      className={`action-button ${variant} ${size} ${className}`}
      onClick={onClick}
      href={href}
      target={href && href.startsWith('http') ? '_blank' : undefined}
      rel={href && href.startsWith('http') ? 'noopener noreferrer' : undefined}
    >
      {children}
    </Component>
  );
};
