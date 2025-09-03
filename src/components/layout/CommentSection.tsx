import React, { useState } from 'react';
import HeroTitle from '../common/HeroTitle';
import CommentCard from '../common/CommentCard';
import Button from '../common/Button';
import './CommentSection.css';

interface Comment {
  id: number;
  message: string;
  userName: string;
  userPosition?: string;
  rating: number;
  userImage?: string;
}

interface CommentSectionProps {
  title?: string;
  description?: string;
  gradientText?: string;
  comments?: Comment[];
  showMoreButton?: boolean;
  maxCommentsToShow?: number;
  onViewMore?: () => void;
  className?: string;
}

const defaultComments: Comment[] = [
  {
    id: 1,
    message:
      'Antes de implementar el ERP, llevaba el control de inventario y ventas mediante hojas de Excel, lo que me generaba muchos errores y pérdida de tiempo. Ahora con el sistema puedo saber en tiempo real qué productos se están agotando, cuáles son los más vendidos y generar reportes automáticos para mis proveedores.',
    userName: 'María Becerra Gutierrez',
    userPosition: 'Llanterías del Sur',
    rating: 5,
  },
  {
    id: 2,
    message:
      'La gestión de proyectos se ha simplificado enormemente. Podemos asignar tareas, seguir el progreso y colaborar de manera más eficiente. ¡Un cambio radical para nuestra productividad!',
    userName: 'Juan Carlos Bodoque',
    userPosition: 'Constructora El Cemento',
    rating: 5,
  },
  {
    id: 3,
    message:
      'El soporte al cliente es excepcional. Siempre están dispuestos a ayudar y resuelven nuestros problemas rápidamente. Nos sentimos muy respaldados con su servicio.',
    userName: 'Ana Sofía Rinaldi',
    userPosition: 'Ferretería El Tornillo Feliz',
    rating: 5,
  },
];

const moreComments: Comment[] = [
  {
    id: 4,
    message:
      'La integración con nuestro sistema contable fue sencilla y rápida. Ahora todo está centralizado y el equipo financiero ahorra mucho tiempo. Además, hemos podido automatizar procesos que antes requerían mucho trabajo manual, como la conciliación bancaria y la generación de informes mensuales. El ERP nos ha permitido tener una visión mucho más clara de la salud financiera de la empresa y tomar decisiones informadas en tiempo real.',
    userName: 'Carlos Méndez',
    userPosition: 'Distribuidora La Central',
    rating: 5,
  },
  {
    id: 5,
    message:
      'La capacitación fue excelente, todos los empleados aprendieron a usar el sistema en pocos días y la curva de adaptación fue mínima. El equipo de soporte nos acompañó durante todo el proceso y resolvió cada duda que tuvimos. Ahora podemos gestionar inventarios, ventas y compras desde una sola plataforma, lo que ha reducido los errores y mejorado la comunicación entre departamentos. Sin duda, ha sido una inversión que ha transformado nuestra operación.',
    userName: 'Lucía Ramírez',
    userPosition: 'Servicios Ramírez',
    rating: 5,
  },
  {
    id: 6,
    message:
      'El acceso móvil nos permite gestionar la empresa desde cualquier lugar, incluso cuando estamos de viaje. Esto ha sido fundamental para supervisar operaciones y aprobar solicitudes sin importar la ubicación. Además, la interfaz es intuitiva y fácil de usar, lo que facilita que todos los colaboradores puedan acceder a la información que necesitan en el momento adecuado. La flexibilidad y seguridad del sistema nos da mucha tranquilidad.',
    userName: 'Pedro Torres',
    userPosition: 'Agropecuaria El Campo',
    rating: 5,
  },
];

const CommentSection: React.FC<CommentSectionProps> = ({
  title = 'Lo que dicen Nuestros Clientes',
  description = 'Conoce casos de éxito, beneficios obtenidos y cómo nuestros clientes han optimizado sus procesos',
  gradientText = 'Clientes',
  comments = defaultComments,
  showMoreButton = true,
  maxCommentsToShow,
  className = '',
}) => {
  const [showMore, setShowMore] = useState(false);

  const visibleComments = showMore ? [...defaultComments, ...moreComments] : defaultComments;

  const handleViewMore = (): void => {
    setShowMore(true);
  };

  const handleViewLess = (): void => {
    setShowMore(false);
  };

  return (
    <section className={`comment-section ${className}`}>
      <div className='comment-section__container'>
        <HeroTitle
          titulo={title}
          descripcion={description}
          gradientText={gradientText}
          tituloStyle='h2'
          descripcionStyle='body-large'
          tituloSize={39}
          descripcionSize={20}
          descripcionMaxWidth='500px'
        />

        <div className='comment-section__grid'>
          {visibleComments.map((comment: Comment) => (
            <CommentCard
              key={comment.id}
              message={comment.message}
              userName={comment.userName}
              userPosition={comment.userPosition}
              rating={comment.rating}
              userImage={comment.userImage}
            />
          ))}
        </div>

        {showMoreButton && (
          <div className='comment-section__action'>
            {!showMore ? (
              <Button
                title='ver más'
                hasBackground={true}
                backgroundColor='var(--acc-600)'
                textColor='var(--white)'
                size='small'
                onClick={handleViewMore}
                className='comment-section__button'
              />
            ) : (
              <Button
                title='ver menos'
                hasBackground={true}
                backgroundColor='var(--acc-600)'
                textColor='var(--white)'
                size='small'
                onClick={handleViewLess}
                className='comment-section__button'
              />
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default CommentSection;
