import { Link } from 'react-router-dom';

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

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.endpoint}>
                      <item.icon />
                      <span>{item.title}</span>
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
