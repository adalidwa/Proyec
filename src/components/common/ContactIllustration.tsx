import React from 'react';
import './ContactIllustration.css';

interface ContactIllustrationProps {
  className?: string;
}

const ContactIllustration: React.FC<ContactIllustrationProps> = ({ className = '' }) => {
  return (
    <div className={`contact-illustration ${className}`}>
      <img
        src='/src/assets/images/contacto.svg'
        alt='Ilustración de contacto - Persona señalando redes sociales'
        className='contact-illustration__image'
      />
    </div>
  );
};

export default ContactIllustration;
