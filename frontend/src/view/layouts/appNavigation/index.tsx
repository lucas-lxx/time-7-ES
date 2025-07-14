import { Outlet } from 'react-router-dom';
import { LayoutSidebar } from './Sidebar';
import { DashboardProvider } from '@/dashboard/DashboardContext';

export default function AppNavigation() {
  return (
    <DashboardProvider>
      <LayoutSidebar>
        <Outlet />
      </LayoutSidebar>
    </DashboardProvider>
  );
}
