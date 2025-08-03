'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useAuthContext } from '@/contexts/authContext';

type UserAvatarProps = {
  size?: number;
  scr?: string;
};

export default function UserAvatar({ size = 96 }: UserAvatarProps) {
  const { user, profileImage } = useAuthContext();

  const getInitials = () => {
    if (!user?.name) return '??';
    return user.name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .slice(0, 2)
      .toUpperCase();
  };

  return (
    <Avatar
      className='rounded-full border'
      style={{ width: size, height: size }}
    >
      {profileImage && (
        <AvatarImage
          src={profileImage || undefined}
          alt={user?.name || 'Avatar'}
          style={{ objectFit: 'cover' }}
        />
      )}
      <AvatarFallback>{getInitials()}</AvatarFallback>
    </Avatar>
  );
}
