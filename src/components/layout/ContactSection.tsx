import React from 'react';
import Button from '../common/Button';
import ContactIllustration from '../common/ContactIllustration';
import HeroTitle from '../common/HeroTitle';
import './ContactSection.css';
import { useNavigate } from 'react-router-dom';

interface ContactSectionProps {
  className?: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ className = '' }) => {
  const navigate = useNavigate();

  const handleContact = () => {
    navigate('/contacto');
  };

  return (
    <section className={`contact-section ${className}`}>
      <div className='contact-section__container'>
        <div className='contact-section__content'>
          <div className='contact-section__illustration'>
            <ContactIllustration />
          </div>

          <div className='contact-section__text'>
            <HeroTitle
              titulo='Comunícate con Nosotros'
              descripcion='Agenda una cita, y conoce los beneficios y todas las nuevas oportunidades'
              gradientText='Nosotros'
              tituloStyle='h2'
              descripcionStyle='body-medium'
              className='contact-section__hero-title'
            />
            <div className='contact-section__button'>
              <Button
                title='Contáctanos'
                onClick={handleContact}
                size='small'
                containerWidth='200px'
                backgroundColor='var(--acc-600)'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
