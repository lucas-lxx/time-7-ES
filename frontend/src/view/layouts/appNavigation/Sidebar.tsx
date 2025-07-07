import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { Link, useLocation } from 'react-router-dom';

import {
  House,
  ClipboardList,
  ChartLine,
  ShieldQuestionMark,
  Bolt,
  CircleAlert,
} from 'lucide-react';

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from '@/components/ui/sidebar';

const items = [
  {
    title: 'Início',
    endpoint: 'gosto',
    icon: House,
  },
  {
    title: 'Organizações',
    endpoint: 'organization',
    icon: ClipboardList,
  },
  {
    title: 'TEMPORÁRIO',
    endpoint: 'financeiro',
    icon: ShieldQuestionMark,
  },
  {
    title: 'Gráficos',
    endpoint: 'gosto',
    icon: ChartLine,
  },
  {
    title: 'Categorias',
    endpoint: 'gosto',
    icon: ShieldQuestionMark,
  },
  {
    title: 'Configurações',
    endpoint: 'gosto',
    icon: Bolt,
  },
  {
    title: 'Sobre',
    endpoint: 'gosto',
    icon: CircleAlert,
  },
];

function AppSidebar() {
  const { pathname } = useLocation();
  const currentPath = pathname.substring(1);
  console.log(currentPath);
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className={`${currentPath === item.endpoint ? 'bg-cor-principal hover:bg-cor-principal' : 'hover:border-1 hover:border-cor-principal'} `}
                  >
                    <Link to={item.endpoint}>
                      <item.icon />
                      <span className='font-roboto'>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className='text-center text-sm text-black'>
          Os Supimpas © 2025 - Coletivo v1.0
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}

export function LayoutSidebar({ children }: { children: React.ReactNode }) {
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
