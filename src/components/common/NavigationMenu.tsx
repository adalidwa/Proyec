// src/components/common/NavigationMenu.tsx
// ============================================
// COMPONENTE MOLECULAR: Navigation Menu
// ============================================
import React from 'react';
import type { NavigationMenuProps } from '../../types/header-institutional.types';
import './NavigationMenu.css';

export const NavigationMenu: React.FC<NavigationMenuProps> = ({
  items,
  className = '',
  variant = 'desktop',
}) => {
  if (variant === 'mobile') {
    return (
      <nav className={`navigation-menu mobile-variant ${className}`}>
        <ul className='mobile-navigation-list'>
          {items.map((item) => (
            <li key={item.id} className='mobile-navigation-item'>
              <a
                href={item.href}
                className='mobile-navigation-link'
                onClick={item.onClick}
                target={item.isExternal ? '_blank' : undefined}
                rel={item.isExternal ? 'noopener noreferrer' : undefined}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }

  return (
    <nav className={`navigation-menu desktop-variant ${className}`}>
      {items.map((item) => (
        <a
          key={item.id}
          href={item.href}
          className='desktop-navigation-link'
          onClick={item.onClick}
          target={item.isExternal ? '_blank' : undefined}
          rel={item.isExternal ? 'noopener noreferrer' : undefined}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
};
