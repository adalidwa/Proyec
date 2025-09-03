import React from 'react';
import './CardHeader.css';

interface CardHeaderProps {
  title: string;
  price: string;
  description?: string;
  comment?: string;
  icons?: React.ReactNode[];
}

const CardHeader: React.FC<CardHeaderProps> = ({
  title,
  price,
  description,
  comment,
  icons = [],
}) => {
  return (
    <div className='card-header'>
      {description && <span className='card-header__tag'>{description}</span>}

      {icons.length > 0 && (
        <div className='card-header__icons'>
          {icons.map((icon, idx) => (
            <span key={idx} className='card-header__icon'>
              {icon}
            </span>
          ))}
        </div>
      )}

      <h3 className='card-header__title'>{title}</h3>

      {comment && <p className='card-header__comment'>{comment}</p>}

      <p className='card-header__price'>
        {price}
        <span>/mes</span>
      </p>
    </div>
  );
};

export default CardHeader;
