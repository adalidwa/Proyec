import PricingCard from '../common/PricingCard';
import HeroTitle from '../common/HeroTitle';
import './PricingSection.css';
import basic from '../../assets/icons/basic_icon.png';
import professional from '../../assets/icons/professional_icon.png';
import bussines from '../../assets/icons/business_icon.png';
import { useNavigate } from 'react-router-dom';

const PricingSection = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/register');
  };

  return (
    <section className='pricing'>
      <div className='pricing__container'>
        <HeroTitle
          titulo='Planes que se Adaptan a tu Negocio'
          descripcion='Elige el plan perfecto y comienza a optimizar tus operaciones hoy mismo'
          gradientText='Negocio'
          tituloStyle='h2'
          descripcionStyle='body-large'
          tituloSize={39}
        />
        <div className='pricing__cards'>
          <PricingCard
            title='Básico'
            price='Bs. 50'
            comment='Perfecto para empresas pequeñas'
            features={[
              'Hasta 10 usuarios',
              'Gestión básica de inventario',
              'Facturación simple',
              'Soporte por gmail',
              '20GB de almacenamiento',
            ]}
            buttonText='Comenzar Ahora'
            icons={[<img src={basic} alt='Hand' />]}
            onButtonClick={handleRedirect}
          />
          <PricingCard
            title='Profesional'
            comment='Para grandes organizaciones'
            price='Bs. 100'
            features={[
              'Hasta 50 usuarios',
              'Gestión de inventario avanzada',
              'Facturación avanzada',
              'Soporte por gmail',
              '200GB de almacenamiento',
              'Integraciones API',
            ]}
            buttonText='Comenzar Ahora'
            icons={[<img src={professional} alt='Grid' />]}
            onButtonClick={handleRedirect}
          />
          <PricingCard
            title='Empresarial'
            comment='Ideal para empresas en crecimiento'
            price='Bs. 200'
            features={[
              'Usuarios ilimitados',
              'Todas las funcionalidades',
              'Facturación simple',
              'Soporte 24/7 dedicado',
              'Almacenamiento ilimitado',
              'Personalización completa',
            ]}
            buttonText='Comenzar Ahora'
            icons={[<img src={bussines} alt='Bookmark' />]}
            onButtonClick={handleRedirect}
          />
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
