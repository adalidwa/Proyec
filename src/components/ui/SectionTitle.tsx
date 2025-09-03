import React from 'react';
import './SectionTitle.css';

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children, className = '' }) => {
  return <h3 className={`section-title ${className}`}>{children}</h3>;
};

export default SectionTitle;
