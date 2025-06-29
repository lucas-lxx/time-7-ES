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
    endpoint: '#',
    icon: House,
  },
  {
    title: 'Relatórios',
    endpoint: '#',
    icon: ClipboardList,
  },
  {
    title: 'Gráficos',
    endpoint: '#',
    icon: ChartLine,
  },
  {
    title: 'Categorias',
    endpoint: '#',
    icon: ShieldQuestionMark,
  },
  {
    title: 'Configurações',
    endpoint: '#',
    icon: Bolt,
  },
  {
    title: 'Sobre',
    endpoint: '#',
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
                    <a href={item.endpoint}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
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
