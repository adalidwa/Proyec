import React from 'react';
import './ContactItem.css';

interface ContactItemProps {
  icon: 'email' | 'location' | 'phone';
  text: string;
  onClick?: () => void;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon, text, onClick }) => {
  return (
    <div className='contact-item' onClick={onClick}>
      <span className={`contact-item__icon contact-item__icon--${icon}`}></span>
      <span className='contact-item__text'>{text}</span>
    </div>
  );
};

export default ContactItem;
