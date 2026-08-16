import { createContext, ReactNode, useState, useEffect, useCallback } from 'react';

interface AuthContextProps {
  isLoggedIn: boolean;
  requireAuth: (action: () => void) => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsLoggedIn(!!token);
  }, []);

  const requireAuth = useCallback(
    (action: () => void) => {
      if (!isLoggedIn) {
        alert('Você precisa entrar em uma conta para utilizar esse recurso!');
      } else {
        action();
      }
    },
    [isLoggedIn]
  );

  return (
    <AuthContext.Provider value={{ isLoggedIn, requireAuth }}>{children}</AuthContext.Provider>
  );
}

export default AuthContext;
