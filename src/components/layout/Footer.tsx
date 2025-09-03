import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../ui/Logo';
import FooterLink from '../ui/FooterLink';
import SectionTitle from '../ui/SectionTitle';
import ContactItem from '../ui/ContactItem';
import './Footer.css';

const Footer: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigationClick = (section: string) => {
    switch (section) {
      case 'home':
      case 'inicio':
        navigate('/');
        break;
      case 'sobre-nosotros':
        navigate('/about');
        break;
      case 'login':
        navigate('/login');
        break;
      case 'register':
        navigate('/register');
        break;
      case 'terminos':
        navigate('/terms');
        break;
      case 'politica':
        navigate('/privacy');
        break;
      case 'documentacion':
        navigate('/documentacion');
        break;
      case 'contacto':
        navigate('/contacto');
        break;
      default:
        break;
    }
  };

  const handleLogoClick = () => {
    handleNavigationClick('home');
  };

  return (
    <footer className='footer'>
      <div className='footer__content'>
        <div className='footer__main-wrapper'>
          <div className='footer__left-content'>
            <div className='footer__brand'>
              <Logo text='INNOVAPAZ' size='medium' variant='white' onClick={handleLogoClick} />
            </div>

            <div className='footer__description-wrapper'>
              <p className='footer__description'>
                La plataforma de gestión empresarial más completa del mercado. Diseñada para hacer
                crecer tu negocio de forma inteligente.
              </p>
            </div>

            <div className='footer__contact-info'>
              <ContactItem
                icon='email'
                text='innovapaz@erpsolutions.com'
                onClick={() =>
                  window.open(
                    'https://mail.google.com/mail/?view=cm&fs=1&to=innovapaz@erpsolutions.com',
                    '_blank'
                  )
                }
              />
              <ContactItem
                icon='location'
                text='Calle General Lanza, #2278 - La Paz, Bolivia'
                onClick={() => window.open('https://maps.app.goo.gl/PZvNsr4N74YTs86B6', '_blank')}
              />
              <ContactItem
                icon='phone'
                text='+591 62366294'
                onClick={() => window.open('https://wa.me/59162366294', '_blank')}
              />
            </div>
          </div>

          <div className='footer__right-content'>
            <div className='footer__links-wrapper'>
              <div className='footer__sitemap-section'>
                <SectionTitle>Sitio</SectionTitle>
                <div className='footer__sitemap-links'>
                  <FooterLink onClick={() => handleNavigationClick('inicio')}>Inicio</FooterLink>
                  <FooterLink onClick={() => handleNavigationClick('sobre-nosotros')}>
                    Sobre Nosotros
                  </FooterLink>
                  <FooterLink onClick={() => handleNavigationClick('login')}>
                    Iniciar Sesión
                  </FooterLink>
                  <FooterLink onClick={() => handleNavigationClick('register')}>
                    Registrarse
                  </FooterLink>
                </div>
              </div>

              <div className='footer__product-section'>
                <SectionTitle>Producto</SectionTitle>
                <div className='footer__product-links'>
                  <FooterLink onClick={() => handleNavigationClick('terminos')}>
                    Términos de Uso
                  </FooterLink>
                  <FooterLink onClick={() => handleNavigationClick('politica')}>
                    Política de Privacidad
                  </FooterLink>
                </div>
              </div>

              <div className='footer__support-section'>
                <SectionTitle>Soporte</SectionTitle>
                <div className='footer__support-links'>
                  <FooterLink onClick={() => handleNavigationClick('documentacion')}>
                    Documentación
                  </FooterLink>
                  <FooterLink onClick={() => handleNavigationClick('contacto')}>
                    Contacto
                  </FooterLink>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='footer__bottom'>
          <div className='footer__divider'></div>
          <p className='footer__copyright'>© 2025 ERP Solutions. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
