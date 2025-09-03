import React from 'react';
import './FooterLink.css';

interface FooterLinkProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({
  children,
  onClick,
  href = '#',
  className = '',
}) => {
  return (
    <a
      href={href}
      className={`footer-link ${className}`}
      onClick={(e) => {
        e.preventDefault();
        onClick?.();
      }}
    >
      {children}
    </a>
  );
};

export default FooterLink;
