import React from 'react';
import './Overlay.css';

interface OverlayProps {
  isVisible: boolean;
  onClick?: () => void;
  className?: string;
}

const Overlay: React.FC<OverlayProps> = ({ isVisible, onClick, className = '' }) => {
  if (!isVisible) return null;

  return <div className={`overlay ${className}`} onClick={onClick} />;
};

export default Overlay;
