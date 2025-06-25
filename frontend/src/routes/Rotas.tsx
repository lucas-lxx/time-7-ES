import { Route, Routes } from 'react-router-dom';

import Cadastro from '../autenticacao/components/Cadastro';
import Login from '../autenticacao/components/Login';
import Recuperacao from '../autenticacao/components/Recuperacao';
import AppLayout from '../autenticacao/index';

export default function Rotas() {
  return (
    <>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path='/login' element={<Login />} />
          <Route path='/recuperacao' element={<Recuperacao />} />
          <Route path='/' element={<Cadastro />} />
        </Route>
      </Routes>
    </>
  );
}
