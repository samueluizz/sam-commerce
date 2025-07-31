'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { registerUser } from '@/lib/auth';

export default function SignUp() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const navigation = useRouter();

  function handleRegister(e: React.FormEvent) {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error('As senhas não coincidem!', {
        description: 'Verifique se as senhas são iguais',
      });
      return;
    }

    const user = {
      name,
      email,
      password,
    };

    const { success, message } = registerUser(user);

    if (success) {
      toast.success(message);
      navigation.push('/login');
    } else {
      toast.error(message);
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className='flex flex-col gap-6'
    >
      <Card className='bg-theme2/50 dark:bg-theme1/50 shadow-lg'>
        <CardHeader className='text-center'>
          <CardTitle className='text-xl text-theme1 dark:text-theme2'>
            Crie sua conta
          </CardTitle>
          <CardDescription className='text-sm text-muted-foreground'>
            Cadastre-se para começar a usar nossos serviços
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form>
            <div className='grid gap-4 text-theme1 dark:text-theme2'>
              <Label htmlFor='name'>Nome</Label>
              <Input
                id='name'
                type='text'
                placeholder='Seu nome completo'
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='border-black dark:border-white'
              />

              <Label htmlFor='email'>Email</Label>
              <Input
                id='email'
                type='email'
                placeholder='email@email.com'
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='border-black dark:border-white'
              />

              <Label htmlFor='password'>Senha</Label>

              <Input
                id='password'
                placeholder='Crie uma senha forte'
                autoComplete='new-password'
                value={password}
                type={'password'}
                onChange={(e) => setPassword(e.target.value)}
                className='border-black dark:border-white'
                required
              />

              <Label htmlFor='confirmPassword'>Confirmação de senha</Label>

              <Input
                id='confirmPassword'
                placeholder='Digite a senha novamente'
                autoComplete='new-password'
                value={confirmPassword}
                type={'password'}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className='border-black dark:border-white'
                required
              />
              <Button
                type='submit'
                onClick={handleRegister}
                variant='theme'
                className='w-full'
              >
                Cadastre-se
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className='flex flex-col gap-3'>
          <div className='text-center text-sm text-theme1 dark:text-theme2'>
            Ja possui conta?
            <Button
              variant='link'
              className='text-theme1 dark:text-theme2'
              onClick={() => navigation.push('/login')}
            >
              Logue-se
            </Button>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
