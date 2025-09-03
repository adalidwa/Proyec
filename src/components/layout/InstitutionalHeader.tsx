// src/components/layout/InstitutionalHeader.tsx
// ============================================
// COMPONENTE ORGANISMO: Institutional Header
// ============================================
import React, { useState, useEffect } from 'react';
import type {
  InstitutionalHeaderProps,
  NavigationItem,
} from '../../types/header-institutional.types';
import { BrandLogo } from '../ui/BrandLogo';
import { MenuToggleButton } from '../ui/MenuToggleButton';
import { ActionButton } from '../ui/ActionButton';
import { NavigationMenu } from '../common/NavigationMenu';
import { MobileMenuOverlay } from '../common/MobileMenuOverlay';
import './InstitutionalHeader.css';

// Navigation items configuration
const navigationItems: NavigationItem[] = [
  { id: 'know-us', label: 'Conozca la empresa', href: '#conocenos' },
  { id: 'why-choose-us', label: 'Por qué elegirnos', href: '#por-que-elegirnos' },
  { id: 'our-services', label: 'Nuestros servicios', href: '#servicios' },
  { id: 'contact', label: 'Contacto', href: '#contacto' },
];

export const InstitutionalHeader: React.FC<InstitutionalHeaderProps> = ({ className = '' }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle mobile menu toggle
  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Handle navigation link click (close mobile menu)
  const handleNavigationClick = () => {
    setIsMobileMenuOpen(false);
  };

  // Add onClick handler to navigation items
  const navigationItemsWithClick = navigationItems.map((item) => ({
    ...item,
    onClick: handleNavigationClick,
  }));

  // Handle body scroll lock when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className={`institutional-header ${isScrolled ? 'is-scrolled' : ''} ${className}`}>
        <div className='container'>
          <div className='institutional-header-content'>
            {/* Brand Logo */}
            <BrandLogo />

            {/* Desktop Navigation */}
            <NavigationMenu items={navigationItems} variant='desktop' />

            {/* Desktop CTA Button */}
            <ActionButton variant='primary' href='/INNOVAPAZ' className='desktop-only'>
              Acceder al Sistema
            </ActionButton>

            {/* Mobile Menu Toggle */}
            <MenuToggleButton
              isOpen={isMobileMenuOpen}
              onClick={handleMobileMenuToggle}
              className='mobile-only'
            />
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <MobileMenuOverlay
        isOpen={isMobileMenuOpen}
        onToggle={handleMobileMenuToggle}
        navigationItems={navigationItemsWithClick}
      />
    </>
  );
};
