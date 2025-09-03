import DisplayCard from '../common/DisplayCard';
import './PlatformFeatures.css';
import iconmision from '../../assets/images/iconmision.png';
import iconvision from '../../assets/images/iconvision.png';

function CompanyIntro() {
  return (
    <div>
      <div className='platform-features__container'>
        <div className='platform-features__grid'>
          <DisplayCard
            icon={<img src={iconmision} />}
            title='Nuestra Misión'
            iconBg='radial-gradient(circle, #DBD56E 0%, #FC7753 100%)'
          >
            Proporcionar soluciones innovadoras y de alta calidad que impulsen el crecimiento y
            éxito de nuestros clientes, mientras contribuimos positivamente al desarrollo de
            nuestras comunidades y al cuidado del medio ambiente.
          </DisplayCard>
          <DisplayCard
            icon={<img src={iconvision} />}
            title='Nuestra Visión'
            iconBg='radial-gradient(circle, #DBD56E 0%, #FC7753 100%)'
          >
            Ser reconocidos como líderes globales en innovación y excelencia, estableciendo nuevos
            estándares en nuestra industria y siendo la primera opción para clientes que buscan
            soluciones transformadoras y sostenibles.
          </DisplayCard>
        </div>
      </div>
    </div>
  );
}

export default CompanyIntro;
