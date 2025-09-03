import React, { useState } from 'react';
import './FaqCard.css';

interface FaqCardProps {
  category: string;
  question: string;
  answer: string;
  className?: string;
}

const FaqCard: React.FC<FaqCardProps> = ({ category, question, answer, className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`faq-card ${className} ${isOpen ? 'faq-card--open' : ''}`} onClick={toggleOpen}>
      <div className='faq-card__header'>
        <div className='faq-card__category'>{category}</div>
        <div className='faq-card__question'>{question}</div>
      </div>
      <div className='faq-card__icon'></div>
      <div className='faq-card__line'></div>
      {isOpen && <div className='faq-card__answer'>{answer}</div>}
    </div>
  );
};

export default FaqCard;
