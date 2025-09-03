// src/types/header-institutional.types.ts
// ============================================
// INTERFACES PARA HEADER INSTITUCIONAL
// ============================================

export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  isExternal?: boolean;
  onClick?: () => void;
}

export interface BrandLogoProps {
  className?: string;
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
}

export interface MenuToggleButtonProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

export interface ActionButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  className?: string;
  onClick?: () => void;
  href?: string;
}

export interface NavigationMenuProps {
  items: NavigationItem[];
  className?: string;
  variant?: 'desktop' | 'mobile';
}

export interface MobileMenuOverlayProps {
  isOpen: boolean;
  onToggle: () => void;
  navigationItems: NavigationItem[];
  className?: string;
}

export interface InstitutionalHeaderProps {
  className?: string;
}
