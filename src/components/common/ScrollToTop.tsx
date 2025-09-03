import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './ScrollToTop.css';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.body.classList.add('scrolling-bg');
    setTimeout(() => {
      document.body.classList.remove('scrolling-bg');
    }, 400);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
