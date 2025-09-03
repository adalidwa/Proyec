import React from 'react';
import './TermsSection.css';

interface TermsSectionProps {
  title: string;
  content: string | string[];
  children?: React.ReactNode;
}

const TermsSection = ({ title, content, children }: TermsSectionProps) => {
  const renderContent = () => {
    if (Array.isArray(content)) {
      return content.map((paragraph, index) => (
        <p key={index} className='terms-section__paragraph'>
          {paragraph}
        </p>
      ));
    }
    return <p className='terms-section__paragraph'>{content}</p>;
  };

  return (
    <section className='terms-section'>
      <h2 className='terms-section__title'>{title}</h2>
      <div className='terms-section__content'>
        {renderContent()}
        {children}
      </div>
    </section>
  );
};

export default TermsSection;
