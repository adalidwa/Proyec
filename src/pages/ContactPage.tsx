import React from 'react';
import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaTwitter,
  FaDiscord,
  FaMapMarkerAlt,
  FaTiktok,
} from 'react-icons/fa';
import { MdSend } from 'react-icons/md';
import { TbBrandTelegram } from 'react-icons/tb';
import './ContactPage.css';
import contact from '../assets/icons/contact.svg';
import Input from '../components/common/Input';
import Button from '../components/common/Button';
import FaqCard from '../components/common/FaqCard';
import HeroTitle from '../components/common/HeroTitle';

const ContactPage: React.FC = () => {
  // Define los datos para tus preguntas frecuentes
  const faqData = [
    {
      category: 'Pregunta 1',
      question: '¿Cómo creo una cuenta?',
      answer:
        'Puedes crear una cuenta desde la página de registro completando el formulario con tus datos personales y de contacto. Una vez completado, recibirás un correo de confirmación para activar tu cuenta.',
    },
    {
      category: 'Pregunta 2',
      question: '¿Qué métodos de pago aceptan?',
      answer:
        'Aceptamos diversos métodos de pago para tu comodidad, incluyendo transferencia bancaria, tarjetas de crédito/débito (Visa, MasterCard, American Express), PayPal, y otros métodos de pago digitales populares en Bolivia.',
    },
    {
      category: 'Pregunta 3',
      question: '¿Cómo puedo comenzar a usar el ERP?',
      answer:
        'Una vez que hayas registrado tu cuenta y accedido con tus credenciales, encontrarás una guía de inicio rápido en tu panel de control. Esta guía te ayudará a configurar tu perfil, familiarizarte con las funciones principales y comenzar a utilizar las herramientas disponibles en nuestro sistema.',
    },
  ];
  return (
    <div className='contact-bg'>
      <div className='contact-header-row'>
        <div className='contact-img-box'>
          <img src={contact} alt='Contact illustration' className='contact-img' />
        </div>
        <div className='contact-header-info'>
          <HeroTitle
            titulo='Contáctanos'
            descripcion='Tu voz es importante para nosotros. Si tienes dudas, ideas o necesitas asesoría, nuestro equipo está listo para ayudarte en cada paso. Escríbenos y haremos todo lo posible por darte una respuesta rápida y clara.'
            gradientText='táctanos'
          />
        </div>
      </div>
      <div className='contact-info-box'>
        <h2 className='contact-info-title'>Información de Contacto</h2>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d478.1752802095031!2d-68.0870545934529!3d-16.53529145695847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f21239926c7cd%3A0x2a399dfb88c485d6!2sEscuela%20Militar%20de%20Ingenier%C3%ADa%20-%20Unidad%20Acad%C3%A9mica%20La%20Paz!5e0!3m2!1ses!2sbo!4v1723447885351!5m2!1ses!2sbo'
          className='contact-map-iframe'
          allowFullScreen=''
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
          title='Ubicación de la Escuela Militar de Ingeniería en Google Maps'
        ></iframe>
        <div className='contact-info-row'>
          <div className='contact-map-address'>
            <span className='contact-map-icon-box'>
              <FaMapMarkerAlt className='contact-info-icon' />
            </span>
            <div>
              <span className='contact-info-label'>Dirección</span>
              <span className='contact-address-value'>Av. Rafael Pabón, Zona Irpavi II</span>
            </div>
          </div>
          <div className='contact-info-card-email'>
            <span className='contact-info-icon-box'>
              <FaEnvelope className='contact-info-icon' />
            </span>
            <div>
              <span className='contact-info-label'>Correo electronico</span>
              <span className='contact-info-value-email'>empresainnovapaz@gmail.com</span>
            </div>
          </div>
          <div className='contact-info-card-phone'>
            <span className='contact-info-icon-box'>
              <FaPhone className='contact-info-icon' />
            </span>
            <div>
              <span className='contact-info-label'>Atención al cliente</span>
              <span className='contact-info-value-phone'>+ (591) 781 - 701 - 61</span>
            </div>
          </div>
        </div>
        <div className='contact-social-icons-row'>
          <a
            href='https://www.facebook.com/profile.php?id=61579219903874&locale=es_LA'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Facebook'
            className='contact-social-link'
          >
            <FaFacebook className='contact-social-icon' />
          </a>
          <a
            href='https://www.tiktok.com/@innovaPaz'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Tiktok'
            className='contact-social-link'
          >
            <FaTiktok className='contact-social-icon' />
          </a>
          <a
            href='https://wa.me/59178701761'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Whatsapp'
            className='contact-social-link'
          >
            <FaWhatsapp className='contact-social-icon' />
          </a>
          <a
            href='https://twitter.com/innova_paz'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Twitter'
            className='contact-social-link'
          >
            <FaTwitter className='contact-social-icon' />
          </a>
          <a
            href='https://t.me/innova_paz'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Telegram'
            className='contact-social-link'
          >
            <TbBrandTelegram className='contact-social-icon' />
          </a>
          <a
            href='https://discord.gg/innova_paz'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Discord'
            className='contact-social-link'
          >
            <FaDiscord className='contact-social-icon' />
          </a>
          <a
            href='https://instagram.com/innova.paz'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Instagram'
            className='contact-social-link'
          >
            <FaInstagram className='contact-social-icon' />
          </a>
        </div>
      </div>
      <div className='contact-form-box'>
        <h2 className='contact-form-title'>Envíanos un mensaje</h2>
        <form className='contact-form'>
          <Input
            id='nombre'
            type='text'
            placeholder='Ingrese su nombre completo'
            label='Nombre completo'
            name='nombre'
            labelColor='var(--pri-700)'
            size='medium'
            textColor='var(--pri-900)'
            labelFontSize='16px'
          />
          <Input
            id='correo'
            type='email'
            placeholder='Ingrese su correo electrónico'
            label='Correo electrónico'
            name='correo'
            labelColor='var(--pri-700)'
            size='medium'
            textColor='var(--pri-900)'
            labelFontSize='16px'
          />
          <Input
            id='telefono'
            type='tel'
            placeholder='Ingrese su número de teléfono'
            label='Número de teléfono'
            name='telefono'
            labelColor='var(--pri-700)'
            size='medium'
            textColor='var(--pri-900)'
            labelFontSize='16px'
          />
          <Input
            id='mensaje'
            type='text'
            placeholder='Mensaje'
            label='Mensaje'
            name='mensaje'
            labelColor='var(--pri-700)'
            size='medium'
            textColor='var(--pri-900)'
            labelFontSize='16px'
            multiline={true}
            rows={7}
          />
          <div className='contact-form-button'>
            <Button
              title='Enviar'
              backgroundColor='var(--pri-900)'
              textColor='var(--pri-100)'
              hasBackground={true}
              borderColor='transparent'
              titleFontWeight='normal'
              containerWidth='full'
              icon={MdSend}
            />
          </div>
        </form>
      </div>
      <div className='contact-faq-box'>
        <h2 className='contact-faq-title'>Preguntas frecuentes</h2>
        <div className='contact-faq-items'>
          {/* Usamos .map() para crear un FaqCard por cada item en nuestros datos */}
          {faqData.map((faq, index) => (
            <FaqCard
              key={index} // La key es importante para que React identifique cada elemento
              category={faq.category}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
