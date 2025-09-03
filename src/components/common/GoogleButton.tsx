import React from 'react';
import './GoogleButton.css';
import { FcGoogle } from 'react-icons/fc';

interface GoogleButtonProps {
  label?: string;
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

const GoogleButton: React.FC<GoogleButtonProps> = ({
  label = 'Continuar con Google',
  size = 'medium',
  fullWidth = true,
  disabled = false,
  onClick,
}) => {
  const classNames = [
    'google-button',
    `custom-button--${size}`,
    fullWidth ? 'custom-button--full-width' : '',
    disabled ? 'custom-button--disabled' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={classNames} onClick={onClick} disabled={disabled}>
      <div className='custom-button__content'>
        <span className='google-button__icon'>
          <FcGoogle size={20} />
        </span>
        <span className='custom-button__title'>{label}</span>
      </div>
    </button>
  );
};

export default GoogleButton;
