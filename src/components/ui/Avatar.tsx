import React from 'react';

interface UserData {
  displayName: string;
  photoURL: string | null;
}

interface AvatarProps {
  user: UserData;
}

const getInitials = (name: string): string => {
  if (!name) return '?';
  const names = name.split(' ').filter(Boolean);
  if (names.length === 0) return '?';

  const firstInitial = names[0][0];
  const lastInitial = names.length > 1 ? names[names.length - 1][0] : '';

  return `${firstInitial}${lastInitial}`.toUpperCase();
};

const generateConsistentColor = (name: string): string => {
  const colors = [
    '#e57373',
    '#ba68c8',
    '#7986cb',
    '#4fc3f7',
    '#4db6ac',
    '#aed581',
    '#ffb74d',
    '#f06292',
    '#81c784',
    '#64b5f6',
    '#ff8a65',
    '#9575cd',
  ];
  let hash = 0;
  if (name.length === 0) return colors[0];
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
    hash = hash & hash;
  }
  const index = Math.abs(hash % colors.length);
  return colors[index];
};

const Avatar: React.FC<AvatarProps> = ({ user }) => {
  if (user.photoURL) {
    return <img src={user.photoURL} alt={user.displayName} className='header__user-avatar' />;
  }

  const initials = getInitials(user.displayName);
  const backgroundColor = generateConsistentColor(user.displayName);

  return (
    <div className='header__user-avatar' style={{ backgroundColor: backgroundColor }}>
      <span>{initials}</span>
    </div>
  );
};

export default Avatar;
