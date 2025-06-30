import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from './app-sidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className='bg-sky-400 w-full p-2 '>
        <SidebarTrigger className='absolute' />
        {children}
      </main>
    </SidebarProvider>
  );
}
