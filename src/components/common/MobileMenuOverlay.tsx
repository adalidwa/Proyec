// src/components/common/MobileMenuOverlay.tsx
// ============================================
// COMPONENTE MOLECULAR: Mobile Menu Overlay
// ============================================
import React from 'react';
import type { MobileMenuOverlayProps } from '../../types/header-institutional.types';
import { NavigationMenu } from './NavigationMenu';
import { ActionButton } from '../ui/ActionButton';
import './MobileMenuOverlay.css';

export const MobileMenuOverlay: React.FC<MobileMenuOverlayProps> = ({
  isOpen,
  onToggle,
  navigationItems,
  className = '',
}) => {
  return (
    <>
      {/* Background Overlay */}
      <div className={`mobile-menu-backdrop ${isOpen ? 'is-open' : ''}`} onClick={onToggle} />

      {/* Mobile Menu Panel */}
      <div className={`mobile-menu-overlay ${isOpen ? 'is-open' : ''} ${className}`}>
        <div className='container'>
          <div className='mobile-menu-content'>
            <NavigationMenu items={navigationItems} variant='mobile' />

            <div className='mobile-menu-actions'>
              <ActionButton variant='primary' href='/sistema'>
                Acceder al Sistema
              </ActionButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
