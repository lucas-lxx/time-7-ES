import { Route, Routes, Navigate } from 'react-router-dom';

import Cadastro from '../autenticacao/components/Cadastro';
import Login from '../autenticacao/login';
import Recuperacao from '../autenticacao/components/Recuperacao';
import AppLayout from '../autenticacao/index';
import AppNavigation from '../area-logada/AppNavigation';

import Teste from '../area-logada/pages/Teste';
import Financeiro from '../area-logada/pages/Financeiro';

export default function Rotas() {
  return (
    <>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path='/login' element={<Login />} />
          <Route path='/recuperacao' element={<Recuperacao />} />
          <Route path='/' element={<Cadastro />} />
          <Route path='*' element={<Navigate to='/login' replace />} />
        </Route>
        <Route element={<AppNavigation />}>
          <Route path='/organization' element={<Teste />} />
          <Route path='/gosto' element={<Recuperacao />} />
          <Route path='/financeiro' element={<Financeiro />} />
        </Route>
      </Routes>
    </>
  );
}
