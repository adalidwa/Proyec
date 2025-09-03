import React from 'react';
import type { IconType } from 'react-icons';
import './SocialIcon.css';

interface SocialIconProps {
  icon: IconType;
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  className?: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({
  icon: Icon,
  size = 'medium',
  onClick,
  className = '',
}) => {
  return (
    <div className={`social-icon social-icon--${size} ${className}`} onClick={onClick}>
      <Icon className='social-icon__icon' />
    </div>
  );
};

export default SocialIcon;
