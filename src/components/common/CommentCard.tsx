import React from 'react';
import { FaStar } from 'react-icons/fa';
import { FaQuoteLeft } from 'react-icons/fa';
import './CommentCard.css';

interface CommentCardProps {
  message: string;
  userName: string;
  userImage?: string;
  rating: number;
  userPosition?: string;
}

const CommentCard: React.FC<CommentCardProps> = ({
  message,
  userName,
  userImage,
  rating,
  userPosition,
}) => {
  const handleRatingClick = (selectedRating: number) => {
    console.log(`Rating selected: ${selectedRating}`);
  };

  const generateUserInitial = (name: string): string => {
    return name.charAt(0).toUpperCase();
  };

  const renderStars = () => {
    return Array.from({ length: 5 }, (_, index) => {
      const starNumber = index + 1;
      return (
        <FaStar
          key={index}
          onClick={() => handleRatingClick(starNumber)}
          className={`star ${starNumber <= rating ? 'star-active' : 'star-inactive'}`}
        />
      );
    });
  };

  return (
    <div className='comment-card'>
      <div className='rating-container'>{renderStars()}</div>

      <div className='quote-section'>
        <div className='quote-icon'>
          <FaQuoteLeft />
        </div>
        <p className='message'>{message}</p>
      </div>

      <div className='user-section'>
        <div className='user-avatar'>
          {userImage ? (
            <img src={userImage} alt={userName} className='user-image' />
          ) : (
            <div className='user-initial'>{generateUserInitial(userName)}</div>
          )}
        </div>
        <div className='user-info'>
          <h4 className='user-name'>{userName}</h4>
          {userPosition && <p className='user-position'>{userPosition}</p>}
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
