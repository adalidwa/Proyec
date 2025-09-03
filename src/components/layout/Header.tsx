import React, { useState, useRef, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../configs/firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import Button from '../common/ButtonExtra';
import Logo from '../ui/Logo';
import NavLink from '../ui/NavLink';
import avatarDefault from '../../assets/images/avatarlogin.png';
import MobileMenu from './MobileMenu';
import './Header.css';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const navigate = useNavigate();
  const { user, logout } = useUser();
  const [nombreFirestore, setNombreFirestore] = useState<string | null>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);

  const handleNavigationClick = (section: string) => {
    setActiveSection(section);
    setIsMobileMenuOpen(false);
    switch (section) {
      case 'home':
        navigate('/');
        break;
      case 'sobre-nosotros':
        navigate('/about');
        break;
      case 'politicas':
        navigate('/privacy');
        break;
      case 'contacto':
        navigate('/contacto');
        break;
      case 'login':
        window.open('/login', '_blank');
        break;
      case 'register':
        window.open('/register', '_blank');
        break;
      default:
        break;
    }
  };

  const handleLogoClick = () => {
    handleNavigationClick('home');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const handleLogout = () => {
    logout();
    setIsUserMenuOpen(false);
    navigate('/');
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setIsUserMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Consultar Firestore si el usuario está logueado y no tiene displayName
  useEffect(() => {
    const fetchNombre = async () => {
      if (user && !user.displayName && 'uid' in user && user.uid) {
        try {
          const docRef = doc(db, 'usuarios', user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const data = docSnap.data();
            setNombreFirestore(data.nombre || null);
          }
        } catch (err) {
          setNombreFirestore(null);
        }
      } else {
        setNombreFirestore(null);
      }
    };
    fetchNombre();
  }, [user]);

  return (
    <>
      <header className='header'>
        <div className='header__content'>
          <div className='header__logo-container'>
            <Logo text='INNOVAPAZ' onClick={handleLogoClick} />
          </div>

          <nav className='header__nav'>
            <NavLink
              onClick={() => handleNavigationClick('home')}
              isActive={activeSection === 'home'}
            >
              Inicio
            </NavLink>
            <NavLink
              onClick={() => handleNavigationClick('sobre-nosotros')}
              isActive={activeSection === 'sobre-nosotros'}
            >
              Sobre Nosotros
            </NavLink>
            <NavLink
              onClick={() => handleNavigationClick('politicas')}
              isActive={activeSection === 'politicas'}
            >
              Privacidad
            </NavLink>
            <NavLink
              onClick={() => handleNavigationClick('contacto')}
              isActive={activeSection === 'contacto'}
            >
              Contáctanos
            </NavLink>
          </nav>

          <div className='header__actions'>
            {user ? (
              <div className='header__user-container' ref={userMenuRef}>
                <div className='header__user-info' onClick={toggleUserMenu}>
                  <img
                    src={user.photoURL ? user.photoURL : avatarDefault}
                    alt='Avatar'
                    className='header__user-avatar'
                  />
                  <span className='header__user-name'>
                    {user.displayName || nombreFirestore || user.email}
                  </span>
                </div>
                {isUserMenuOpen && (
                  <div className='header__user-menu'>
                    <button className='header__menu-item' onClick={handleLogout}>
                      Cerrar Sesión
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Button
                  variant='primary'
                  size='small'
                  onClick={() => handleNavigationClick('login')}
                >
                  Iniciar Sesión
                </Button>
                <Button
                  variant='outline'
                  size='small'
                  onClick={() => handleNavigationClick('register')}
                >
                  Registrarse
                </Button>
              </>
            )}
          </div>

          <button
            className={`header__menu-toggle ${isMobileMenuOpen ? 'header__menu-toggle--active' : ''}`}
            onClick={toggleMobileMenu}
          >
            <span className='header__hamburger-line'></span>
            <span className='header__hamburger-line'></span>
            <span className='header__hamburger-line'></span>
          </button>
        </div>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={closeMobileMenu}
        onNavigate={handleNavigationClick}
      />
    </>
  );
};

export default Header;
