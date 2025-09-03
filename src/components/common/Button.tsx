import React from 'react';
import type { IconType } from 'react-icons';
import './Button.css';

interface ButtonProps {
  // Texto del botón
  title: string;
  description?: string;

  // Gradiente para parte del título
  gradientText?: string;
  gradientColors?: string;

  // Estilo del botón
  hasBackground?: boolean;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;

  // Icono
  icon?: IconType;
  iconPosition?: 'left' | 'right';
  iconSize?: number;

  // Tipografía
  titleFontWeight?: 'normal' | 'bold';
  descriptionFontWeight?: 'normal' | 'bold';

  // Dimensiones
  size?: 'small' | 'medium' | 'large' | 'custom';
  width?: string;
  height?: string;
  containerWidth?: 'full' | 'auto' | 'fit-content' | string; // Nueva prop

  // Funcionalidad
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  title,
  description,
  gradientText = '',
  gradientColors = 'linear-gradient(45deg, #ff6b6b, #ffa500)',
  hasBackground = true,
  backgroundColor = 'var(--sec-800)',
  borderColor = 'var(--sec-800)',
  textColor = 'var(--bg-50)',
  icon: Icon,
  iconPosition = 'left',
  iconSize = 20,
  titleFontWeight = 'bold',
  descriptionFontWeight = 'normal',
  size = 'medium',
  width,
  height,
  containerWidth = 'auto', // Valor por defecto
  onClick,
  disabled = false,
  className = '',
}) => {
  const processTitle = () => {
    if (!gradientText) return title;

    const parts = title.split(gradientText);
    if (parts.length === 1) return title;

    return (
      <>
        {parts[0]}
        <span
          className='button-gradient-text'
          style={{ background: gradientColors, WebkitBackgroundClip: 'text' }}
        >
          {gradientText}
        </span>
        {parts[1]}
      </>
    );
  };

  // Función para determinar el ancho del contenedor
  const getContainerWidth = (): string => {
    if (containerWidth === 'full') return '100%';
    if (containerWidth === 'auto') return 'auto';
    if (containerWidth === 'fit-content') return 'fit-content';
    if (
      (typeof containerWidth === 'string' && containerWidth.includes('px')) ||
      containerWidth.includes('%') ||
      containerWidth.includes('rem')
    ) {
      return containerWidth;
    }
    return 'auto';
  };

  const buttonStyle: React.CSSProperties = {
    backgroundColor: hasBackground ? backgroundColor : 'transparent',
    border: hasBackground ? 'none' : `2px solid ${borderColor}`,
    color: hasBackground ? textColor : borderColor,
    width: size === 'custom' ? width : getContainerWidth(),
    height: size === 'custom' ? height : undefined,
  };

  const buttonClasses = [
    'custom-button',
    `custom-button--${size}`,
    disabled ? 'custom-button--disabled' : '',
    containerWidth === 'full' ? 'custom-button--full-width' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={buttonClasses} style={buttonStyle} onClick={onClick} disabled={disabled}>
      <div className='custom-button__content'>
        {Icon && iconPosition === 'left' && (
          <Icon className='custom-button__icon custom-button__icon--left' size={iconSize} />
        )}

        <div className='custom-button__text-content'>
          <h3 className='custom-button__title' style={{ fontWeight: titleFontWeight }}>
            {processTitle()}
          </h3>

          {description && (
            <p className='custom-button__description' style={{ fontWeight: descriptionFontWeight }}>
              {description}
            </p>
          )}
        </div>

        {Icon && iconPosition === 'right' && (
          <Icon className='custom-button__icon custom-button__icon--right' size={iconSize} />
        )}
      </div>
    </button>
  );
};

export default Button;
