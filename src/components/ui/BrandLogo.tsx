// src/components/ui/BrandLogo.tsx
// ============================================
// COMPONENTE ATÓMICO: Brand Logo
// ============================================
import React from 'react';
import type { BrandLogoProps } from '../../types/header-institutional.types';
import './BrandLogo.css';

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'medium',
  onClick,
}) => {
  return (
    <a href='/' className={`brand-logo ${size} ${className}`} onClick={onClick}>
      <span className='brand-logo-text'>InnovaCorp</span>
    </a>
  );
};
