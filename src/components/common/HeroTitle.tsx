import React from 'react';
import './HeroTitle.css';

export interface HeroTitleProps {
  titulo: string;
  descripcion: string;
  gradientText?: string;
  tituloStyle?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  descripcionStyle?: 'body-large' | 'body-medium' | 'body-small' | 'caption';
  tituloSize?: number;
  descripcionSize?: number;
  descripcionMaxWidth?: string;
  className?: string;
}

const HeroTitle: React.FC<HeroTitleProps> = ({
  titulo,
  descripcion,
  gradientText,
  tituloStyle = 'h1',
  descripcionStyle = 'body-large',
  tituloSize,
  descripcionSize,
  descripcionMaxWidth,
  className = '',
}) => {
  const renderTitulo = () => {
    if (gradientText && titulo.includes(gradientText)) {
      const parts = titulo.split(gradientText);
      return (
        <>
          {parts[0]}
          <span className='hero-title__gradient'>{gradientText}</span>
          {parts[1]}
        </>
      );
    }
    return titulo;
  };

  const tituloStyles = tituloSize ? { fontSize: `${tituloSize}px` } : {};
  const descripcionStyles = {
    ...(descripcionSize ? { fontSize: `${descripcionSize}px` } : {}),
    ...(descripcionMaxWidth
      ? ({ '--descripcion-max-width': descripcionMaxWidth } as React.CSSProperties)
      : {}),
  };

  return (
    <div className={`hero-title ${className}`}>
      <h1 className={`hero-title__title hero-title__title--${tituloStyle}`} style={tituloStyles}>
        {renderTitulo()}
      </h1>
      <p
        className={`hero-title__description hero-title__description--${descripcionStyle}`}
        style={descripcionStyles}
      >
        {descripcion}
      </p>
    </div>
  );
};

export default HeroTitle;
