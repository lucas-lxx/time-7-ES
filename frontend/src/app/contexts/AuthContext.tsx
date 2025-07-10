import { createContext, useCallback, useEffect, useState } from 'react';
import { localStorageKeys } from '@/app/config/localStorageKeys';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { usersService } from '../../app/services/usersService';
import { toast } from 'sonner';
import { PageLoader } from '@/view/components/PageLoader';

interface AuthContextValue {
  signedIn: boolean;
  signin: (accessToken: string) => void;
  signout: () => void;
}

export const AuthContext = createContext({} as AuthContextValue);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [signedIn, setSignedIn] = useState<boolean>(() => {
    const storedAcessToken = localStorage.getItem(
      localStorageKeys.ACCESS_TOKEN,
    );

    return !!storedAcessToken;
  });

  //minuto 38 antes
  const { isError, isFetching, isSuccess } = useQuery({
    queryKey: ['user', 'me'],
    queryFn: () => usersService.me(),
    enabled: signedIn,
    staleTime: Infinity,
  });

  const signin = useCallback((accessToken: string) => {
    localStorage.setItem(localStorageKeys.ACCESS_TOKEN, accessToken);

    setSignedIn(true);
  }, []);

  const queryClient = useQueryClient();
  const signout = useCallback(() => {
    localStorage.removeItem(localStorageKeys.ACCESS_TOKEN);
    queryClient.removeQueries({ queryKey: ['user', 'me'] });
    setSignedIn(false);
  }, [queryClient]);

  useEffect(() => {
    if (isError) {
      toast.error('Sua sessão expirou', {
        action: {
          label: 'Fechar',
          onClick: () => console.log('Undo'),
        },
      });
      signout();
    }
  }, [isError, signout]);

  if (isFetching) {
    return <PageLoader />;
  }

  return (
    <AuthContext.Provider
      value={{
        signedIn: isSuccess && signedIn,
        signin,
        signout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
