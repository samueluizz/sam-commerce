import { User } from 'lucide-react';

interface User {
  name: string;
  email: string;
  password: string;
}

export function isValidEmail(email: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

export function getUser(): User | null {
  const storedUser = localStorage.getItem('user');
  return storedUser ? JSON.parse(storedUser) : null;
}

export function registerUser(user: User): {
  success: boolean;
  message: string;
} {
  if (!user.name || !user.email || !user.password) {
    return { success: false, message: 'Preencha todos os campos' };
  }

  if (!isValidEmail(user.email)) {
    return { success: false, message: 'Email inválido' };
  }

  if (user.password.length < 6) {
    return {
      success: false,
      message: 'A senha deve conter no mínimo 6 caracteres',
    };
  }

  localStorage.setItem('user', JSON.stringify(user));
  localStorage.setItem('isLoggedIn', 'true');

  return { success: true, message: 'Usuário cadastrado com sucesso' };
}

export function login(email: string, password: string): boolean {
  const storedUser = localStorage.getItem('user');

  if (!storedUser) return false;

  const user: User = JSON.parse(storedUser);
  const isValid =
    user.email.trim().toLocaleLowerCase() ===
      email.trim().toLocaleLowerCase() && user.password === password;

  if (isValid) {
    localStorage.setItem('isLoggedIn', 'true');
    return true;
  }

  return false;
}

export function logout() {
  return localStorage.setItem('isLoggedIn', 'false');
}

export function changePassword(
  email: string,
  newPassword: string,
): { success: boolean; message: string } {
  const storedUser = localStorage.getItem('user');

  if (!storedUser) {
    return { success: false, message: 'Nenhum usuário logado' };
  }

  const user: User = JSON.parse(storedUser);

  if (user.email !== email) {
    return { success: false, message: 'Email incorreto' };
  }

  if (newPassword.length < 6) {
    return {
      success: false,
      message: 'A senha deve conter no mínimo 6 caracteres',
    };
  }

  const updatedUser: User = { ...user, password: newPassword };
  localStorage.setItem('user', JSON.stringify(updatedUser));
  localStorage.setItem('loggedUser', JSON.stringify(updatedUser));

  return { success: true, message: 'Senha alterada com sucesso' };
}
