import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/app/hooks/useAuth';
import { Button } from '../../../autenticacao/components/Button';

import {
  House,
  ClipboardList,
  ChartLine,
  //ShieldQuestionMark,
  HandCoins,
  Bolt,
  //CircleAlert,
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
    endpoint: 'sobre',
    icon: House,
  },
  {
    title: 'Meus Grupos',
    endpoint: 'organization',
    icon: ClipboardList,
  },
  {
    title: 'Gasto do Grupo',
    endpoint: 'financeiro',
    icon: HandCoins,
  },
  {
    title: 'Gráficos',
    endpoint: 'gosto',
    icon: ChartLine,
  },
  /*{
    title: 'Categorias',
    endpoint: 'gosto',
    icon: ShieldQuestionMark,
  },*/
  {
    title: 'Configurações',
    endpoint: 'gosto1',
    icon: Bolt,
  },
  /*{
    title: 'Sobre',
    endpoint: 'gosto',
    icon: CircleAlert,
  },*/
];

function AppSidebar() {
  const { signout } = useAuth();
  const { pathname } = useLocation();
  const currentPath = pathname.substring(1);
  // console.log(currentPath);
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
                    className={`${currentPath === item.endpoint ? 'bg-sky-400 hover:bg-sky-400' : 'hover:border-1 hover:border-skybg-sky-400'} `}
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
        <SidebarMenuButton
          asChild
          className='bg-sky-600 hover:bg-sky-400 hover:opacity-90 hover:border-1 cursor-pointer'
        >
          <Button idButton='sairDaConta' onClick={signout}>
            Sair
          </Button>
        </SidebarMenuButton>

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
