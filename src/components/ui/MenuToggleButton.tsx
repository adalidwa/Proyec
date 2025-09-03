// src/components/ui/MenuToggleButton.tsx
// ============================================
// COMPONENTE ATÓMICO: Menu Toggle Button (Hamburger)
// ============================================
import React from 'react';
import type { MenuToggleButtonProps } from '../../types/header-institutional.types';
import './MenuToggleButton.css';

export const MenuToggleButton: React.FC<MenuToggleButtonProps> = ({
  isOpen,
  onClick,
  className = '',
}) => {
  return (
    <button
      type='button'
      className={`menu-toggle-button ${isOpen ? 'is-open' : ''} ${className}`}
      onClick={onClick}
      aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
      aria-expanded={isOpen}
    >
      <span className='menu-toggle-line'></span>
      <span className='menu-toggle-line'></span>
      <span className='menu-toggle-line'></span>
    </button>
  );
};
