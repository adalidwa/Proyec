import React from 'react';
import LogoSvg from '../../assets/icons/Logo.svg';
import './Logo.css';

interface LogoProps {
  text?: string;
  onClick?: () => void;
  showText?: boolean;
  size?: 'small' | 'medium' | 'large';
  variant?: 'default' | 'white';
}

const Logo: React.FC<LogoProps> = ({
  text = 'INNOVAPAZ',
  onClick,
  showText = true,
  size = 'medium',
  variant = 'default',
}) => {
  return (
    <div className={`logo logo--${size} logo--${variant}`} onClick={onClick}>
      <div className='logo__icon'>
        <img src={LogoSvg} alt='Logo' className='logo__image' />
      </div>
      {showText && <span className='logo__text'>{text}</span>}
    </div>
  );
};

export default Logo;
