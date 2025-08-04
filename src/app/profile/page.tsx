'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import UserAvatar from '@/components/customComponents/users/userAvatar';
import ProfileImageUpload from '@/components/customComponents/users/profileImageUpload';
import { useAuthContext } from '@/contexts/authContext';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { motion } from 'framer-motion';

export default function ProfilePage() {
  const { user, isLoggedIn, isAuthLoading, logoutUser, changePassword } =
    useAuthContext();
  const navigation = useRouter();

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    if (!isAuthLoading && !isLoggedIn) {
      toast.error('Você deve estar logado para acessar seu perfil.', {
        action: {
          label: 'Ir para Login',
          onClick: () => navigation.push('/login'),
        },
      });
      navigation.push('/login');
    }
  }, [isLoggedIn, isAuthLoading, navigation]);

  if (isAuthLoading) return <div>Carregando...</div>;

  if (!isLoggedIn) return null;

  const handlePasswordChange = () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      toast.error('Preencha todos os campos da troca de senha.');
      return;
    }

    if (currentPassword !== user?.password) {
      toast.error('Senha atual incorreta.');
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error('A nova senha e a confirmação não coincidem.');
      return;
    }

    const result = changePassword(user.email, newPassword);

    if (result.success) {
      toast.success(result.message);
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } else {
      toast.error(result.message);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className='relative min-w-screen min-h-screen gap-y-10'
    >
      <div className='max-w-7xl mx-auto px-4 space-y-6 sm:px-6'>
        <div className='pt-6 flex justify-end'>
          <Button variant={'destructive'} onClick={logoutUser}>
            Sair
          </Button>
        </div>
        <header className='space-y-2 mt-1 text-xl text-theme1 dark:text-theme2 flex items-center justify-center'>
          <div className='flex items-center space-x-3'>
            <UserAvatar size={0} />
            <div className='space-y-1'>
              <h1 className='text-2xl font-bold text-center'>
                Bem-vindo {user?.name || 'Usuário'}
              </h1>
              <ProfileImageUpload />
            </div>
          </div>
        </header>

        <div className='space-y-8'>
          <Card className='bg-theme2/50 dark:bg-theme1/50 shadow-lg'>
            <CardContent className='space-y-6 text-theme1 dark:text-theme2'>
              <div className='space-y-2'>
                <Label htmlFor='name'>Nome</Label>
                <Input
                  id='name'
                  placeholder='E.g. Jane Doe'
                  defaultValue={user?.name}
                  className='border-black dark:border-white'
                />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='email'>Email</Label>
                <Input
                  id='email'
                  placeholder='E.g. jane@example.com'
                  defaultValue={user?.email}
                  disabled
                  className='border-black dark:border-white cursor-not-allowed'
                />
              </div>
            </CardContent>
          </Card>

          <Card className='bg-theme2/50 dark:bg-theme1/50 shadow-lg '>
            <CardHeader>
              <div>Trocar Senha</div>
              <div>
                Para sua segurança, não compartilhe sua senha com ninguém.
              </div>
            </CardHeader>
            <CardContent className='space-y-4 text-xl text-theme1 dark:text-theme2'>
              <div className='space-y-2'>
                <Label htmlFor='current-password'>Senha Atual</Label>
                <Input
                  type='password'
                  id='current-password'
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className='border-black dark:border-white'
                />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='new-password'>Nova Senha</Label>
                <Input
                  type='password'
                  id='new-password'
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className='border-black dark:border-white'
                />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='confirm-password'>Confirmar Senha</Label>
                <Input
                  type='password'
                  id='confirm-password'
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className='border-black dark:border-white'
                />
              </div>
            </CardContent>
          </Card>
        </div>
        <div className='pt-6'>
          <Button variant={'theme'} onClick={handlePasswordChange}>
            Save
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
