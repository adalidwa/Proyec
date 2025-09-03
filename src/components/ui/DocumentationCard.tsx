import React from 'react';
import './DocumentationCard.css';

interface DocumentationCardProps {
  title: string;
  items: string[];
}

const DocumentationCard: React.FC<DocumentationCardProps> = ({ title, items }) => {
  return (
    <article className='documentationCard'>
      <h3 className='documentationCard__title'>{title}</h3>
      <ul className='documentationCard__list'>
        {items.map((item, index) => (
          <li key={index} className='documentationCard__item'>
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
};

export default DocumentationCard;
