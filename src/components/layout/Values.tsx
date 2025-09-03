import HeroTitle from '../common/HeroTitle';
import DisplayCard from '../common/DisplayCard';
import './Values.css';
import innovacion from '../../assets/images/innovacion.svg';
import transparencia from '../../assets/images/transparencia.svg';
import compromiso from '../../assets/images/compromiso.svg';

function Values() {
  return (
    <section className='values'>
      <div className='values__container'>
        <HeroTitle
          titulo='Los pilares que nos definen'
          descripcion=''
          gradientText='definen'
          tituloStyle='h2'
          descripcionStyle='body-medium'
          className='values__title'
        />
        <div className='values__grid'>
          <div className='values__grid-item'>
            <DisplayCard
              icon={<img src={transparencia} />}
              title='Transparencia'
              containerWidth={250}
              containerHeight={400}
              gap={30}
              font='var(--font-31)'
              contentFont='var(--font-20)'
              color='--pri-600'
              fontFamily='var(--font)'
              titleFontWeight={600}
              contentFontWeight={300}
            >
              Actuamos con honestidad y claridad en todas nuestras relaciones comerciales.
            </DisplayCard>
          </div>
          <div className='values__grid-item'>
            <DisplayCard
              icon={<img src={compromiso} />}
              title='Compromiso'
              containerWidth={250}
              containerHeight={400}
              gap={30}
              font='var(--font-31)'
              contentFont='var(--font-20)'
              color='--pri-600'
              fontFamily='var(--font)'
              titleFontWeight={600}
              contentFontWeight={300}
            >
              Actuamos con honestidad y claridad en todas nuestras relaciones comerciales.
            </DisplayCard>
          </div>
          <div className='values__grid-item'>
            <DisplayCard
              icon={<img src={innovacion} />}
              title='Innovación'
              containerWidth={250}
              containerHeight={400}
              gap={30}
              font='var(--font-31)'
              contentFont='var(--font-20)'
              color='--pri-600'
              fontFamily='var(--font)'
              titleFontWeight={600}
              contentFontWeight={300}
            >
              Actuamos con honestidad y claridad en todas nuestras relaciones comerciales.
            </DisplayCard>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Values;
