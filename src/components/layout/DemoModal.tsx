import React, { useState, useEffect } from 'react';
import Input from '../common/Input';
import Button from '../common/Button';
import './DemoModal.css';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  const [form, setForm] = useState({
    nombre: '',
    negocio: '',
    correo: '',
    telefono: '',
  });

  const [shouldRender, setShouldRender] = useState(isOpen);
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      const timer = setTimeout(() => setAnimationClass('modal-open'), 10);
      return () => clearTimeout(timer);
    } else {
      setAnimationClass('');
      const timer = setTimeout(() => setShouldRender(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!shouldRender) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onClose();
  };

  return (
    <div className={`demo-modal__overlay ${animationClass}`} onClick={onClose}>
      <div className='demo-modal__container' onClick={(e) => e.stopPropagation()}>
        <button className='demo-modal__close' onClick={onClose}>
          ×
        </button>
        <div className='demo-modal__top'>
          <div className='demo-modal__header'>
            <h2 className='demo-modal__title'>Solicita tu Demo</h2>
          </div>
          <div className='demo-modal__desc-wrapper'>
            <p className='demo-modal__desc demo-modal__desc-mobile'>
              Déjanos tus datos y te mostraremos INNOVAPAZ en acción.
            </p>
            <p className='demo-modal__desc demo-modal__desc-desktop'>
              Completa tus datos y un especialista te contactará para una demo personalizada de
              INNOVAPAZ. Descubre cómo transformar tu negocio.
            </p>
          </div>
        </div>
        <form className='demo-modal__form' onSubmit={handleSubmit}>
          <Input
            id='nombre'
            name='nombre'
            label='Nombre Completo *'
            placeholder='Ingresa tu nombre completo'
            value={form.nombre}
            onChange={handleChange}
            containerWidth='full'
            labelColor='var(--pri-700)'
            textColor='var(--pri-900)'
            placeholderColor='var(--pri-600)'
            validate='text'
          />
          <Input
            id='negocio'
            name='negocio'
            label='Nombre de tu Negocio *'
            placeholder='Ingresa el nombre de tu empresa'
            value={form.negocio}
            onChange={handleChange}
            containerWidth='full'
            labelColor='var(--pri-700)'
            textColor='var(--pri-900)'
            placeholderColor='var(--pri-600)'
            validate='alphanumeric'
          />
          <Input
            id='correo'
            name='correo'
            label='Correo Electrónico *'
            type='email'
            placeholder='example@empresa.com'
            value={form.correo}
            onChange={handleChange}
            containerWidth='full'
            labelColor='var(--pri-700)'
            textColor='var(--pri-900)'
            placeholderColor='var(--pri-600)'
            validate='email'
          />
          <Input
            id='telefono'
            name='telefono'
            label='Número de Teléfono'
            type='tel'
            placeholder='000 000 00'
            value={form.telefono}
            onChange={handleChange}
            containerWidth='full'
            labelColor='var(--pri-700)'
            textColor='var(--pri-900)'
            placeholderColor='var(--pri-600)'
            validate='bolivia-phone'
          />
          <button
            type='submit'
            style={{ border: 'none', background: 'none', padding: 0, width: '100%' }}
          >
            <Button
              title='Solicitar Demo'
              size='medium'
              containerWidth='full'
              hasBackground={true}
              backgroundColor='var(--acc-600)'
              textColor='var(--bg-50)'
            />
          </button>
        </form>
      </div>
    </div>
  );
};

export default DemoModal;
