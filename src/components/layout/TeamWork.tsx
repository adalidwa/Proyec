import React from 'react';
import HeroTitle from '../common/HeroTitle';
import './TeamWork.css';
import reunion from '../../assets/images/reunion.png';
import nuestramision from '../../assets/images/nuestravision.svg';
import nuestraVision from '../../assets/images/nuestramision.svg';

const TeamWork: React.FC = () => (
  <section className='teamwork'>
    <div className='teamwork__quienes_somos'>
      <div className='teamwork__hero'>
        <HeroTitle
          titulo='¿Quienes somos?'
          descripcion='Somos InnovaPaz, una empresa tecnológica comprometida con la transformación digital de las organizaciones a través de soluciones ERP innovadoras y eficientes. Nacimos con la visión de simplificar los procesos empresariales complejos, ofreciendo herramientas integrales que optimizan la gestión de recursos, automatizan operaciones y potencian el crecimiento sostenible de nuestros clientes. '
          gradientText='somos?'
          className='teamwork__main_title'
        />
      </div>
      <div className='teamwork__image_containers'>
        <img src={reunion} className='teamwork__images' alt='Equipo de trabajo' />
      </div>
    </div>

    <div className='teamwork__mision'>
      <div className='teamwork__hero'>
        <HeroTitle
          titulo='Nuestra Misión'
          descripcion='Proporcionar soluciones innovadoras y de alta calidad que impulsen el crecimiento y éxito de nuestros clientes, mientras contribuimos positivamente al desarrollo de nuestras comunidades y al cuidado del medio ambiente.'
          gradientText='Misión'
          tituloStyle='h2'
          className='teamwork__about_title'
        />
      </div>
      <div className='teamwork__image_container'>
        <img src={nuestramision} className='teamwork__image' alt='Nuestra Misión' />
      </div>
    </div>

    <div className='teamwork__vision'>
      <div className='teamwork__hero'>
        <HeroTitle
          titulo='Nuestra Visión'
          descripcion='Proporcionar soluciones innovadoras y de alta calidad que impulsen el crecimiento y éxito de nuestros clientes, mientras contribuimos positivamente al desarrollo de nuestras comunidades y al cuidado del medio ambiente.'
          gradientText='Visión'
          tituloStyle='h2'
          className='teamwork__about_title'
        />
      </div>
      <div className='teamwork__image_container'>
        <img src={nuestraVision} className='teamwork__image' alt='Nuestra Visión' />
      </div>
    </div>
  </section>
);

export default TeamWork;
