import HeroTitle from '../common/HeroTitle';
import Button from '../common/Button';
import './TrustSection.css';
import equipodesarrollo from '../../assets/images/equipodesarrollo.jpg';

function TrustSection() {
  return (
    <section className='trust-section'>
      <div className='trust-section__container'>
        <div className='trust-section__left'>
          <HeroTitle
            titulo='Los Expertos detrás de INNOVAPAZ'
            descripcion='INNOVAPAZ es una creación de nuestro equipo de ingenieros de sistemas dedicados a construir soluciones tecnológicas que realmente impulsan a las pequeñas y medianas empresas. Nuestra experiencia garantiza un software robusto, seguro y fácil de usar.'
            gradientText='INNOVAPAZ'
            tituloStyle='h2'
            descripcionStyle='body-medium'
            descripcionMaxWidth='600px'
          />
          <div className='trust-section__button'>
            <a
              href='https://illustrious-lolly-59ea54.netlify.app/'
              target='_blank'
              rel='noopener noreferrer'
              style={{ textDecoration: 'none' }}
            >
              <Button
                title='Conoce más sobre nosotros'
                size='large'
                containerWidth='fit-content'
                backgroundColor='var(--white)'
                borderColor='var(--acc-600)'
                textColor='var(--acc-600)'
                hasBackground={false}
                className='trust-section__cta-btn'
              />
            </a>
          </div>
        </div>
        <div className='trust-section__right'>
          <div className='trust-section__card'>
            <img
              src={equipodesarrollo}
              alt='Equipo de desarrollo de INNOVAPAZ'
              className='trust-section__image'
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrustSection;