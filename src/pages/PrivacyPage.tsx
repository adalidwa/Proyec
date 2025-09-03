import TermsTitle from '../components/common/TermsTitle';
import './TermsPage.css';
import './PrivacyPage.css';
import PrivacyContent from '../components/layout/PrivacyContent';

const PrivacyPage = () => {
  return (
    <div className='terms-page'>
      <div className='terms-page__container'>
        <TermsTitle
          title='Política de Privacidad'
          subtitle='Última actualización: 9 de agosto de 2025'
        />
        <PrivacyContent />
      </div>
    </div>
  );
};

export default PrivacyPage;
