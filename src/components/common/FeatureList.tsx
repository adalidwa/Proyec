import React from 'react';
import './FeatureList.css';

interface FeatureListProps {
  features: string[];
}

const FeatureList: React.FC<FeatureListProps> = ({ features }) => {
  return (
    <div className='feature-list'>
      {features.map((feature, index) => (
        <div key={index} className='feature-list__item'>
          <span className='feature-list__check' aria-hidden='true'></span>
          <span className='feature-list__text'>{feature}</span>
        </div>
      ))}
    </div>
  );
};

export default FeatureList;
