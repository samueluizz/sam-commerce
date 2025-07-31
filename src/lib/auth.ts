interface User {
  name: string;
  email: string;
  password: string;
}

export function registerUser(user: User): {
  success: boolean;
  message: string;
} {
  if (!user.name || !user.email || !user.password) {
    return { success: false, message: 'Preencha todos os campos' };
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

export function getUser(): User | null {
  const storedUser = localStorage.getItem('user');
  return storedUser ? JSON.parse(storedUser) : null;
}
