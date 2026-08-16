import { useState, useEffect, useCallback } from 'react';

export function useAuth() {
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

  return { isLoggedIn, setIsLoggedIn, requireAuth };
}
