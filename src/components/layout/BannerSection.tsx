import React from 'react';
import { useState } from 'react';
import ImageWithStats from '../ui/ImageWithStats';
import HeroTitle from '../common/HeroTitle';
import Button from '../common/Button';
import { FaArrowRight } from 'react-icons/fa';
import teamImage from '../../assets/images/teamImage.png';
import DemoModal from '../layout/DemoModal';
import './BannerSection.css';
const BannerSection: React.FC = () => {
  const [showDemoModal, setShowDemoModal] = useState(false);

  const handleRevisarServicios = () => {
    const section = document.getElementById('platform-features');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleVerDemo = () => {
    setShowDemoModal(true);
  };

  return (
    <>
      <section className='banner-section'>
        <div className='banner-section__container'>
          <div className='banner-section__grid'>
            <div className='banner-section__content'>
              <HeroTitle
                titulo='Transforma tu Negocio con Tecnología'
                descripcion='Automatiza procesos, optimiza recursos y toma decisiones basadas en datos reales. Únete a todas las empresas que ya revolucionaron su gestión.'
                gradientText='con Tecnología'
                tituloStyle='h1'
                descripcionStyle='body-large'
              />

              <div className='banner-section__actions'>
                <Button
                  title='Revisa Nuestros Servicios'
                  icon={FaArrowRight}
                  iconPosition='right'
                  iconSize={16}
                  hasBackground={true}
                  backgroundColor='var(--acc-600)'
                  textColor='var(--bg-50)'
                  size='small'
                  containerWidth='full'
                  onClick={handleRevisarServicios}
                />

                <Button
                  title='Ver Demo en Vivo'
                  hasBackground={false}
                  borderColor='var(--acc-600)'
                  textColor='var(--acc-600)'
                  size='small'
                  containerWidth='full'
                  onClick={handleVerDemo}
                />
              </div>

              <div className='banner-section__features'>
                <div className='feature-item'>
                  <div className='feature-item__icon'>✓</div>
                  <span className='feature-item__text'>Sin compromisos</span>
                </div>
                <div className='feature-item'>
                  <div className='feature-item__icon'>✓</div>
                  <span className='feature-item__text'>Soporte 24/7</span>
                </div>
                <div className='feature-item'>
                  <div className='feature-item__icon'>✓</div>
                  <span className='feature-item__text'>Implementación rápida</span>
                </div>
              </div>
            </div>

            <div className='banner-section__image'>
              <ImageWithStats
                imageSrc={teamImage}
                imageAlt='Equipo profesional trabajando con tecnología'
                efficiencyValue='+100%'
                supportValue='24/7'
              />
            </div>
          </div>
        </div>
      </section>
      <DemoModal isOpen={showDemoModal} onClose={() => setShowDemoModal(false)} />
    </>
  );
};

export default BannerSection;
