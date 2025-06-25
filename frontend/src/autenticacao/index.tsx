import { Outlet } from 'react-router-dom';
import TelaAutenticacao from './components/TelaAutenticacao';

export default function AppLayout() {
  return (
    <TelaAutenticacao>
      <Outlet />
    </TelaAutenticacao>
  );
}
