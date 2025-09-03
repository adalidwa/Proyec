import TermsTitle from '../components/common/TermsTitle';
import './TermsPage.css';
import TermsContent from '../components/layout/TermsContent';

const TermsPage = () => {
  return (
    <div className='terms-page'>
      <div className='terms-page__container'>
        <TermsTitle title='Términos de Uso' subtitle='Última actualización: 9 de agosto de 2025' />
        <TermsContent />
      </div>
    </div>
  );
};

export default TermsPage;
