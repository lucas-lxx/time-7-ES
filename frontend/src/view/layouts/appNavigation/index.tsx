import { Outlet } from 'react-router-dom';
import { LayoutSidebar } from './Sidebar';

export default function AppNavigation() {
  return (
    <>
      <LayoutSidebar>
        <Outlet />
      </LayoutSidebar>
    </>
  );
}
