import { Outlet } from 'react-router-dom';
import TelaAutenticacao from './TelaAutenticacao';

export default function AuthLayout() {
  return (
    <TelaAutenticacao>
      <Outlet />
    </TelaAutenticacao>
  );
}
