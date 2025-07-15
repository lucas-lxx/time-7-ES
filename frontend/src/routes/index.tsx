import { Route, Routes, Navigate, BrowserRouter } from 'react-router-dom';
import AuthLayout from '../view/layouts/authLayout';
import AppNavigation from '../view/layouts/appNavigation';

import Cadastro from '../autenticacao/cadastro';
import Login from '../autenticacao/login';
import { PageManutencao } from '@/view/components/PageManutencao.tsx';
import Recuperacao from '../autenticacao/recuperacao';
import MinhasOrganizacoes from '../dashboard/pages/minhasOrganizacoes';
import Financeiro from '../dashboard/pages/financeiro';
import Sobre from '../dashboard/pages/sobre/Sobre';

import { AuthGuard } from './AuthGuard';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthGuard isPrivate={false} />}>
          <Route element={<AuthLayout />}>
            <Route path='/login' element={<Login />} />
            <Route path='/recuperacao' element={<Recuperacao />} />
            <Route path='/' element={<Cadastro />} />
            <Route path='*' element={<Navigate to='/login' replace />} />
          </Route>
        </Route>
        <Route element={<AuthGuard isPrivate={true} />}>
          <Route element={<AppNavigation />}>
            <Route path='/organization' element={<MinhasOrganizacoes />} />
            <Route path='/gosto' element={<PageManutencao />} />
            <Route path='/financeiro' element={<Financeiro />} />
            <Route path='/sobre' element={<Sobre />} />
            <Route path='/gosto1' element={<PageManutencao />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
