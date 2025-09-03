import React, { useState } from 'react';
import './Input.css';

interface InputProps {
  id: string;
  label?: string;
  type?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: string;
  icon?: React.ElementType;
  iconPosition?: 'left' | 'right';
  iconSize?: number;
  showTogglePassword?: boolean;
  showPasswordIcon?: React.ElementType;
  hidePasswordIcon?: React.ElementType;
  disabled?: boolean;
  className?: string;

  containerWidth?: 'full' | 'auto' | 'fit-content' | string;
  size?: 'small' | 'medium' | 'large' | 'custom';
  width?: string;
  height?: string;
  backgroundColor?: string;
  borderColor?: string;
  borderWidth?: string;
  textColor?: string;
  labelColor?: string;
  labelFontSize?: string;
  errorColor?: string;

  multiline?: boolean;
  rows?: number;
  placeholderColor?: string;

  validate?: 'text' | 'alphanumeric' | 'email' | 'bolivia-phone';
  setError?: (msg: string) => void;
  maxLength?: number;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type = 'text',
  name,
  value,
  placeholder,
  onChange,
  onBlur,
  error,
  icon: Icon,
  iconPosition = 'right',
  iconSize = 20,
  showTogglePassword = false,
  showPasswordIcon: ShowPasswordIcon,
  hidePasswordIcon: HidePasswordIcon,
  disabled = false,
  className = '',
  containerWidth = 'auto',
  size = 'medium',
  width,
  height,
  backgroundColor = 'transparent',
  borderColor = 'var(--bg-900)',
  borderWidth = '1px',
  textColor = 'var(--pri-100)',
  labelColor = 'var(--pri-100)',
  labelFontSize,
  errorColor = 'var(--acc-900)',
  multiline = false,
  rows = 4,
  placeholderColor,
  validate,
  setError,
  maxLength,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  // --- FUNCIÓN DE MANEJO DE CAMBIOS (CORREGIDA) ---
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const originalValue = e.target.value;
    let finalValue = originalValue;
    let errorMsg = '';

    switch (validate) {
      case 'bolivia-phone': {
        const digits = originalValue.replace(/\D/g, '').slice(0, 8);
        finalValue = digits;
        if (setError) {
          if (digits.length > 0 && digits.length < 8) {
            errorMsg = 'El número debe tener 8 dígitos.';
          } else {
            errorMsg = '';
          }
          setError(errorMsg);
        }
        break;
      }
      case 'email': {
        let val = originalValue;
        // Autocompleta dominio
        if (/^[^\s@]+@g$/.test(val)) {
          val = val.replace(/@g$/, '@gmail.com');
        } else if (/^[^\s@]+@o$/.test(val)) {
          val = val.replace(/@o$/, '@outlook.com');
        } else if (/^[^\s@]+@h$/.test(val)) {
          val = val.replace(/@h$/, '@hotmail.com');
        }
        // Bloquea escritura después del dominio
        const dominios = ['@gmail.com', '@outlook.com', '@hotmail.com'];
        for (const dominio of dominios) {
          const idx = val.indexOf(dominio);
          if (idx !== -1 && val.length > idx + dominio.length) {
            val = val.slice(0, idx + dominio.length);
          }
        }
        finalValue = val;
        // Validación básica de email
        if (val && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
          errorMsg = 'Correo electrónico inválido.';
        } else {
          errorMsg = '';
        }
        if (setError) setError(errorMsg);
        break;
      }
      case 'text': {
        const textOnly = originalValue.replace(/[^A-Za-zÁÉÍÓÚáéíóúÑñ\s]/g, '');
        finalValue = textOnly;
        break;
      }
      case 'alphanumeric': {
        const alphanumeric = originalValue.replace(/[^A-Za-zÁÉÍÓÚáéíóúÑñ0-9\s]/g, '');
        finalValue = alphanumeric;
        break;
      }
      default:
        break;
    }

    const newEvent = {
      ...e,
      target: { ...e.target, value: finalValue, name: e.target.name },
    };

    if (onChange) {
      onChange(newEvent as React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>);
    }
  };

  // Agrupa el número en formato XXX XX XXX
  const getTelefonoVisual = (value?: string) => {
    const digits = value ? value.replace(/\D/g, '').slice(0, 8) : '';
    let visual = '';
    if (digits.length > 0) visual += digits.slice(0, 3);
    if (digits.length > 3) visual += ' ' + digits.slice(3, 5);
    if (digits.length > 5) visual += ' ' + digits.slice(5, 8);
    return visual;
  };

  const isPassword = type === 'password';
  const inputType = isPassword && showTogglePassword ? (showPassword ? 'text' : 'password') : type;

  const getContainerWidth = (): string => {
    if (containerWidth === 'full') return '100%';
    if (containerWidth === 'auto') return 'auto';
    if (containerWidth === 'fit-content') return 'fit-content';
    if (typeof containerWidth === 'string') return containerWidth;
    return 'auto';
  };

  const inputWrapperStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor,
    border: `${borderWidth} solid ${borderColor}`,
    borderRadius: '8px',
    padding: '0 12px',
    height: multiline
      ? 'auto'
      : height || (size === 'small' ? '50px' : size === 'large' ? '52px' : '60px'),
    width: size === 'custom' && width ? width : '100%',
    boxSizing: 'border-box',
  };

  const inputFieldStyle: React.CSSProperties = {
    flex: 1,
    border: 'none',
    outline: 'none',
    background: 'transparent',
    color: textColor,
    fontSize: size === 'small' ? '14px' : size === 'large' ? '20px' : '16px',
    height: multiline ? 'auto' : '100%',
    resize: multiline ? 'vertical' : 'none', // solo textarea se puede redimensionar vertical
    padding: multiline ? '8px 0' : undefined,
  };

  return (
    <div
      className={`custom-input-container ${className}`}
      style={{ width: getContainerWidth(), display: 'flex', flexDirection: 'column', gap: '4px' }}
    >
      {placeholderColor && (
        <style>
          {`
            #${id}::placeholder {
              color: ${placeholderColor};
              opacity: 0.4;
            }
          `}
        </style>
      )}
      {label && (
        <label
          htmlFor={id}
          style={{
            color: labelColor,
            fontSize:
              labelFontSize || (size === 'small' ? '13px' : size === 'large' ? '20px' : '16px'),
          }}
        >
          {label}
        </label>
      )}
      <div style={inputWrapperStyle}>
        {Icon && iconPosition === 'left' && <Icon size={iconSize} />}
        {multiline ? (
          <textarea
            id={id}
            name={name || id}
            value={value}
            placeholder={placeholder}
            onChange={handleInputChange}
            onBlur={onBlur}
            disabled={disabled}
            rows={rows}
            style={inputFieldStyle}
            maxLength={maxLength}
          />
        ) : (
          <div style={{ position: 'relative', width: '100%' }}>
            {validate === 'bolivia-phone' && (
              <span
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  color: '#888',
                  fontSize: inputFieldStyle.fontSize,
                  paddingLeft: '4px',
                  pointerEvents: 'none',
                  zIndex: 2,
                }}
              >
                +591&nbsp;
              </span>
            )}
            <input
              id={id}
              type={inputType}
              name={name || id}
              value={validate === 'bolivia-phone' ? getTelefonoVisual(value) : value}
              placeholder={placeholder}
              onChange={handleInputChange}
              onBlur={onBlur}
              disabled={disabled}
              style={{
                ...inputFieldStyle,
                paddingLeft: validate === 'bolivia-phone' ? '52px' : inputFieldStyle.paddingLeft,
              }}
              maxLength={validate === 'bolivia-phone' ? 10 : maxLength}
              autoComplete={validate === 'email' ? 'email' : 'off'}
            />
          </div>
        )}
        {isPassword && showTogglePassword && (ShowPasswordIcon || HidePasswordIcon) && (
          <span
            onClick={() => setShowPassword((v) => !v)}
            style={{ cursor: 'pointer', display: 'flex' }}
          >
            {showPassword
              ? HidePasswordIcon && <HidePasswordIcon size={iconSize} />
              : ShowPasswordIcon && <ShowPasswordIcon size={iconSize} />}
          </span>
        )}
        {Icon && iconPosition === 'right' && <Icon size={iconSize} />}
      </div>
      {error && <span style={{ color: errorColor, fontSize: '12px' }}>{error}</span>}
    </div>
  );
};

export default Input;
