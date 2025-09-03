import React from 'react';
import Button from '../common/ButtonExtra';
import NavLink from '../ui/NavLink';
import Overlay from '../common/Overlay';
import Avatar from '../ui/Avatar';
import { useUser } from '../../context/UserContext';
import './MobileMenu.css';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (section: string) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, onNavigate }) => {
  const { user } = useUser();

  return (
    <div className={`mobile-menu ${isOpen ? 'mobile-menu--open' : ''}`}>
      <Overlay isVisible={isOpen} onClick={onClose} />
      <div className='mobile-menu__content'>
        {user && (
          <div className='mobile-menu__user-header'>
            <Avatar user={user} />
            <span className='mobile-menu__user-name'>{user.displayName}</span>
          </div>
        )}
        <nav className='mobile-menu__nav'>
          <NavLink variant='mobile' onClick={() => onNavigate('home')}>
            Inicio
          </NavLink>
          <NavLink variant='mobile' onClick={() => onNavigate('sobre-nosotros')}>
            Sobre Nosotros
          </NavLink>
          <NavLink variant='mobile' onClick={() => onNavigate('politicas')}>
            Privacidad
          </NavLink>
          <NavLink variant='mobile' onClick={() => onNavigate('contacto')}>
            Contáctanos
          </NavLink>
        </nav>
        <div className='mobile-menu__footer'>
          {user ? (
            <Button
              variant='outline'
              size='medium'
              onClick={() => {
                console.log('Cerrar sesión');
                onClose();
              }}
            >
              Cerrar Sesión
            </Button>
          ) : (
            <>
              <Button variant='primary' size='medium' onClick={() => onNavigate('login')}>
                Iniciar Sesión
              </Button>
              <Button variant='outline' size='medium' onClick={() => onNavigate('register')}>
                Registrarse
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
