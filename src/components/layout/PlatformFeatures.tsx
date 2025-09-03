import React from 'react';
import DisplayCard from '../common/DisplayCard';
import './PlatformFeatures.css';
import ventas from '../../assets/images/Gestinoventas.svg';
import compras from '../../assets/images/Gestioncompras.svg';
import inventario from '../../assets/images/Gestioninventarios.svg';
import reportes from '../../assets/images/Gestionreportes.svg';
import HeroTitle from '../common/HeroTitle';

const PlatformFeatures: React.FC = () => (
  <section className='platform-features' id='platform-features'>
    <div className='platform-features__container'>
      <div className='platform-features__title'>
        <HeroTitle
          titulo='Todo lo que Necesitas en una Plataforma'
          descripcion='Descubre cómo nuestro ERP puede revolucionar la gestión de tu empresa'
          gradientText='Plataforma'
          className='platform-features__center-title'
        />
      </div>
      <div className='platform-features__grid'>
        <DisplayCard icon={<img src={ventas} />} title='Gestión de Ventas'>
          El sistema permite registrar ventas rápidas, gestionar clientes internos, seguir
          transacciones por producto y generar cotizaciones con seguimiento, además de reportes por
          período, vendedor, producto y cliente.
        </DisplayCard>
        <DisplayCard icon={<img src={compras} />} title='Gestión de Compras'>
          El sistema permite registrar ventas rápidas, gestionar clientes internos, seguir
          transacciones por producto y generar cotizaciones con seguimiento, además de reportes por
          período, vendedor, producto y cliente.
        </DisplayCard>
        <DisplayCard icon={<img src={inventario} />} title='Gestión de Inventarios'>
          El sistema permite registrar ventas rápidas, gestionar clientes internos, seguir
          transacciones por producto y generar cotizaciones con seguimiento, además de reportes por
          período, vendedor, producto y cliente.
        </DisplayCard>
        <DisplayCard icon={<img src={reportes} />} title='Gestión de Reportes'>
          El sistema permite registrar ventas rápidas, gestionar clientes internos, seguir
          transacciones por producto y generar cotizaciones con seguimiento, además de reportes por
          período, vendedor, producto y cliente.
        </DisplayCard>
      </div>
    </div>
  </section>
);

export default PlatformFeatures;
