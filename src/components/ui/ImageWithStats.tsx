import React from 'react';
import './ImageWithStats.css';

interface ImageWithStatsProps {
  imageSrc: string;
  imageAlt: string;
  efficiencyValue?: string;
  supportValue?: string;
  className?: string;
}

const ImageWithStats: React.FC<ImageWithStatsProps> = ({
  imageSrc,
  imageAlt,
  efficiencyValue = '+100%',
  supportValue = '24/7',
  className = '',
}) => {
  return (
    <div className={`section__container ${className}`}>
      <div className='image-with-stats'>
        <div className='image-with-stats__container'>
          <img src={imageSrc} alt={imageAlt} className='image-with-stats__image' />

          <div className='image-with-stats__badge image-with-stats__badge--efficiency'>
            <div className='badge__value'>{efficiencyValue}</div>
            <div className='badge__label'>Eficiencia</div>
          </div>

          <div className='image-with-stats__badge image-with-stats__badge--support'>
            <div className='badge__value'>{supportValue}</div>
            <div className='badge__label'>Soporte</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageWithStats;
