import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../app/hooks/useAuth';

export interface AuthGuardProps {
  isPrivate: boolean;
}

export function AuthGuard({ isPrivate }: AuthGuardProps) {
  const { signedIn } = useAuth();

  if (!signedIn && isPrivate) {
    return <Navigate to='/login' replace />; // Redireciona para a página de login se o usuário não estiver autenticado e a rota for privada
  }

  if (signedIn && !isPrivate) {
    return <Navigate to='/organization' replace />;
  }

  return <Outlet />; // Renderiza o conteúdo da rota se as condições forem atendidas
}
