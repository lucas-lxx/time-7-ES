import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from './app-sidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className='bg-amber-300 w-full'>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
