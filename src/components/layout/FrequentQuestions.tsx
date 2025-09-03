import React, { useState } from 'react';
import HeroTitle from '../common/HeroTitle';
import FaqCard from '../common/FaqCard';
import Button from '../common/Button';
import './FrequentQuestions.css';

const FrequentQuestions: React.FC = () => {
  const initialFaqData = [
    {
      category: 'Implementación',
      question: '¿Cuánto tiempo tarda la implementación del sistema ERP?',
      answer:
        'El tiempo de implementación varía según la complejidad y el tamaño de tu empresa. Un proyecto estándar puede durar entre 3 y 6 meses, incluyendo análisis, configuración, migración de datos y capacitación.',
    },
    {
      category: 'Personalización',
      question: '¿El sistema ERP se puede personalizar para mi industria?',
      answer:
        'Sí, nuestro ERP es altamente personalizable. Podemos adaptarlo a las necesidades específicas de tu industria, ya sea manufactura, distribución, servicios, etc., configurando módulos y flujos de trabajo a medida.',
    },
    {
      category: 'Costos',
      question: '¿Cuál es el modelo de precios del ERP?',
      answer:
        'Ofrecemos un modelo de suscripción basado en el número de usuarios y los módulos contratados. Esto incluye actualizaciones, soporte técnico y mantenimiento. Contáctanos para una cotización personalizada.',
    },
    {
      category: 'Soporte',
      question: '¿Qué tipo de soporte técnico ofrecen post-implementación?',
      answer:
        'Brindamos soporte continuo a través de varios canales: teléfono, email y portal de cliente. Nuestro equipo está disponible para resolver incidencias, responder dudas y asegurar el óptimo funcionamiento del sistema.',
    },
  ];

  const moreFaqData = [
    {
      category: 'Seguridad',
      question: '¿Cómo se protege la información en el sistema ERP?',
      answer:
        'Utilizamos protocolos de seguridad avanzados, cifrado de datos y autenticación de usuarios para garantizar la protección de tu información.',
    },
    {
      category: 'Actualizaciones',
      question: '¿El sistema recibe actualizaciones automáticas?',
      answer:
        'Sí, todas las actualizaciones y mejoras se aplican automáticamente sin afectar el funcionamiento diario.',
    },
    {
      category: 'Integraciones',
      question: '¿Se puede integrar el ERP con otros sistemas?',
      answer:
        'Nuestro ERP permite integraciones con sistemas contables, CRM, e-commerce y más mediante APIs y conectores estándar.',
    },
    {
      category: 'Capacitación',
      question: '¿Ofrecen capacitación para los usuarios?',
      answer:
        'Sí, ofrecemos sesiones de capacitación presenciales y virtuales para asegurar el correcto uso del sistema.',
    },
    {
      category: 'Accesibilidad',
      question: '¿Puedo acceder al ERP desde dispositivos móviles?',
      answer:
        'El sistema es accesible desde cualquier dispositivo con conexión a internet, incluyendo móviles y tablets.',
    },
    {
      category: 'Escalabilidad',
      question: '¿El ERP es escalable si mi empresa crece?',
      answer:
        'Por supuesto, el sistema está diseñado para crecer junto con tu empresa, permitiendo agregar usuarios y módulos según lo necesites.',
    },
  ];

  const [faqData, setFaqData] = useState(initialFaqData);
  const [showMore, setShowMore] = useState(false);

  const handleViewMore = (): void => {
    setFaqData([...initialFaqData, ...moreFaqData]);
    setShowMore(true);
  };

  const handleViewLess = (): void => {
    setFaqData(initialFaqData);
    setShowMore(false);
  };

  return (
    <section className='frequent-questions'>
      <div className='frequent-questions__container'>
        <HeroTitle
          titulo='Preguntas Frecuentes'
          descripcion='Encuentra respuestas rápidas a las dudas más comunes sobre nuestros servicios'
          gradientText='Frecuentes'
          tituloStyle='h2'
          descripcionStyle='body-large'
          tituloSize={39}
          descripcionSize={20}
          descripcionMaxWidth='500px'
        />

        <div className='frequent-questions__grid'>
          {faqData.map((faq, index) => (
            <FaqCard
              key={index}
              category={faq.category}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>

        <div className='frequent-questions__action'>
          {!showMore ? (
            <Button
              title='ver más'
              hasBackground={true}
              backgroundColor='var(--acc-600)'
              textColor='var(--white)'
              size='small'
              onClick={handleViewMore}
              className='frequent-questions__button'
            />
          ) : (
            <Button
              title='ver menos'
              hasBackground={true}
              backgroundColor='var(--acc-600)'
              textColor='var(--white)'
              size='small'
              onClick={handleViewLess}
              className='frequent-questions__button'
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default FrequentQuestions;
