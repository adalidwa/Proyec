import React from 'react';
import './NavLink.css';

interface NavLinkProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'desktop' | 'mobile';
  className?: string;
  isActive?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({
  children,
  onClick,
  variant = 'desktop',
  className = '',
  isActive = false,
}) => {
  return (
    <button
      className={`nav-link nav-link--${variant} ${isActive ? 'nav-link--active' : ''} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default NavLink;
