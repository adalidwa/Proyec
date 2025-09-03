import React from 'react';
import './DisplayCard.css'; // Asegúrate de que este archivo exista y tenga los estilos necesarios
interface DisplayCardProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  iconBg?: string; // Nueva prop opcional
  iconWidth?: string | number; // Nuevo prop opcional
  iconHeight?: string | number; // Nuevo prop opcional
  containerWidth?: string | number; // Nuevo prop opcional
  containerHeight?: string | number; // Nuevo prop opcional
  gap?: string | number; // Nuevo prop opcional para el espacio interno
  font?: string; // Nuevo prop opcional para la fuente del título
  contentFont?: string; // Nuevo prop opcional para la fuente del contenido
  color?: string; // Nuevo prop opcional para el color
  fontFamily?: string; // Nuevo prop opcional para font-family
  fontWeight?: string | number; // Nuevo prop opcional para font-weight
  titleFontWeight?: string | number; // Nuevo prop para font-weight del título
  contentFontWeight?: string | number; // Nuevo prop para font-weight del contenido
}

const DisplayCard: React.FC<DisplayCardProps> = ({
  icon,
  title,
  children,
  iconBg,
  iconWidth,
  iconHeight,
  containerWidth,
  containerHeight,
  gap,
  font,
  contentFont,
  color,
  fontFamily,
  fontWeight,
  titleFontWeight,
  contentFontWeight,
}) => (
  <div
    className='display-card'
    style={{
      width: containerWidth,
      height: containerHeight,
      gap,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
  >
    <div
      className='display-card__icon'
      style={{
        background: iconBg,
        width: iconWidth ?? 125,
        height: iconHeight ?? 113,
      }}
    >
      {icon}
    </div>
    <h3
      className='display-card__title'
      style={{
        ...(font ? { font } : {}),
        ...(color ? { color: `var(${color})` } : {}),
        ...(fontFamily ? { fontFamily } : {}),
        ...(titleFontWeight ? { fontWeight: titleFontWeight } : fontWeight ? { fontWeight } : {}),
      }}
    >
      {title}
    </h3>
    <div
      className='display-card__content'
      style={{
        ...(contentFont ? { font: contentFont } : {}),
        ...(color ? { color: `var(${color})` } : {}),
        ...(fontFamily ? { fontFamily } : {}),
        ...(contentFontWeight
          ? { fontWeight: contentFontWeight }
          : fontWeight
            ? { fontWeight }
            : {}),
      }}
    >
      {children}
    </div>
  </div>
);

export default DisplayCard;
