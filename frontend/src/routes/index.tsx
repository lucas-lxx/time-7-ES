import { Route, Routes, Navigate, BrowserRouter } from 'react-router-dom';
import AuthLayout from '../view/layouts/authLayout';
import AppNavigation from '../view/layouts/appNavigation';

import Cadastro from '../autenticacao/cadastro';
import Login from '../autenticacao/login';
import Coringa from '../autenticacao/components/Coringa';
import Recuperacao from '../autenticacao/recuperacao';
import Teste from '../dashboard/pages/Teste';
import Financeiro from '../dashboard/pages/financeiro';

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
            <Route path='/organization' element={<Teste />} />
            <Route path='/gosto' element={<Coringa />} />
            <Route path='/financeiro' element={<Financeiro />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
