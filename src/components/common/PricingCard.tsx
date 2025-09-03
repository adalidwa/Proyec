import React from 'react';
import './PricingCard.css';
import Button from './Button';
import CardHeader from './CardHeader';
import FeatureList from './FeatureList';

interface PricingCardProps {
  title: string;
  price: string;
  description?: string;
  comment?: string;
  features: string[];
  highlight?: boolean;
  buttonText: string;
  icons?: React.ReactNode[];
  onButtonClick?: () => void;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  description,
  comment,
  features,
  highlight = false,
  buttonText,
  icons = [],
  onButtonClick,
}) => {
  return (
    <div className={`pricing-card ${highlight ? 'pricing-card--highlight' : ''}`}>
      <CardHeader
        title={title}
        description={description}
        comment={comment}
        price={price}
        icons={icons}
      />

      <FeatureList features={features} />

      <div className='pricing-card__button'>
        <Button
          title={buttonText}
          size='medium'
          backgroundColor='var(--acc-500)'
          textColor='white'
          className='custom-button--pricingcard'
          onClick={onButtonClick}
        />
      </div>
    </div>
  );
};

export default PricingCard;
