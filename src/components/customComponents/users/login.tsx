import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { FaApple, FaGoogle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { useAuthContext } from '@/contexts/authContext';

export default function LoginForm() {
  const navigation = useRouter();
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { loginUser, isLoggedIn } = useAuthContext();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (isLoggedIn) {
      const redirectUrl = searchParams.get('redirect') || '/profile';
      navigation.push(redirectUrl);
    }
  }, [isLoggedIn, navigation, searchParams]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsLoading(true);

    try {
      const success = loginUser(email, password);

      if (success) {
        toast.success('Login realizado com sucesso!');
        const redirectUrl = searchParams.get('redirect') || '/profile';
        navigation.push(redirectUrl as string);
      } else {
        toast.error('Email ou senha inválidos!', {
          action: {
            label: 'Cadastrar',
            onClick: () => navigation.push('/signup'),
          },
        });
      }
    } catch (error) {
      toast.error('Ocorreu um erro durante o login' + error);
    } finally {
      setIsLoading(false);
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
            Bem-vindo!
          </CardTitle>
          <CardDescription>
            Logue-se com sua conta Apple ou Google
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className='grid gap-4 text-theme1 dark:text-theme2'>
              <div className='flex flex-col items-center justify-center md:flex-row gap-4'>
                <Button variant='theme'>
                  <FaApple className='mr-2' />
                  Login com Apple
                </Button>
                <Button variant='theme'>
                  <FaGoogle className='mr-2' />
                  Login com Google
                </Button>
              </div>
              <span className='flex items-center justify-center'>
                <CardDescription>Ou continue com email e senha</CardDescription>
              </span>

              <div className='grid gap-6'>
                <div className='grid gap-3 '>
                  <Label htmlFor='email'>Email</Label>
                  <Input
                    id='email'
                    type='email'
                    placeholder='email@exemplo.com'
                    className='border-black dark:border-white'
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className='grid gap-3'>
                  <div className='flex items-center'>
                    <Label htmlFor='password'>Password</Label>
                    <Link
                      href='#'
                      className='ml-auto text-sm underline-offset-4 hover:underline'
                    >
                      Esqueceu a senha?
                    </Link>
                  </div>
                  <Input
                    id='password'
                    type='password'
                    className='border-black dark:border-white'
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <Button
                  type='submit'
                  variant='theme'
                  className='w-full'
                  disabled={isLoading}
                >
                  {isLoading ? 'Entrando...' : 'Login'}
                </Button>
              </div>
            </div>
          </form>
          <CardFooter className='flex flex-col gap-3'>
            <div className='text-center text-sm text-theme1 dark:text-theme2'>
              Não possui conta?
              <Button
                type='button'
                variant='link'
                className='text-theme1 dark:text-theme2'
                onClick={() => navigation.push('/signup')}
              >
                Cadastre-se
              </Button>
            </div>
          </CardFooter>
        </CardContent>
      </Card>
      <div className='text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4'>
        By clicking continue, you agree to our <a href='#'>Terms of Service</a>{' '}
        and <a href='#'>Privacy Policy</a>.
      </div>
    </motion.div>
  );
}
