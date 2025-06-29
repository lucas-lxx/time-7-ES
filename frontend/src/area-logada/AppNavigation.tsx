import { Outlet } from 'react-router-dom';
import Layout from './layout/Index';

export default function AppNavigation() {
  return (
    <>
      <Layout>
        <Outlet />
      </Layout>
    </>
  );
}
