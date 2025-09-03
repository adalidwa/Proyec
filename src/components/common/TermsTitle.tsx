import './TermsTitle.css';

interface TermsTitleProps {
  title: string;
  subtitle: string;
}

const TermsTitle = ({ title, subtitle }: TermsTitleProps) => {
  return (
    <div className='terms-title'>
      <h1 className='terms-title__heading'>{title}</h1>
      <p className='terms-title__subtitle'>{subtitle}</p>
    </div>
  );
};

export default TermsTitle;
