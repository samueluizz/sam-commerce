'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useAuthContext } from '@/contexts/authContext';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

export default function ProfileImageUpload() {
  const { user } = useAuthContext();
  const [preview, setPreview] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);

  const storageKey = user?.email ? `profileImage-${user.email}` : null;

  useEffect(() => {
    if (!storageKey) return;
    const storedImage = localStorage.getItem(storageKey);
    if (storedImage) {
      setPreview(storedImage);
    }
  }, [storageKey]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    setFile(selectedFile);
    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  };

  const handleSave = () => {
    if (!file || !storageKey) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result as string;
      localStorage.setItem(storageKey, base64);
      setPreview(base64);
      toast.success('Imagem salva com sucesso!');
    };
    reader.readAsDataURL(file);
  };

  if (!user) {
    return <p>Você precisa estar logado para alterar sua imagem de perfil.</p>;
  }

  const getInitials = () => {
    if (!user.name) return '??';
    return user.name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .slice(0, 2)
      .toUpperCase();
  };

  return (
    <div className='flex flex-col items-center gap-4'>
      <Avatar className='h-48 w-48 border-2'>
        <AvatarImage
          src={preview || undefined}
          alt={user.name || 'Avatar'}
          className='object-cover'
        />
        <AvatarFallback className='text-4xl'>{getInitials()}</AvatarFallback>
      </Avatar>

      <Input
        type='file'
        accept='image/*'
        onChange={handleImageChange}
        className='cursor-pointer'
      />

      <Button
        variant={'theme'}
        onClick={handleSave}
        disabled={!file}
        className='w-full max-w-xs'
      >
        Salvar Imagem
      </Button>
    </div>
  );
}
