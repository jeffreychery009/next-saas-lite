import { AppSidebar } from '@/components/sidebar/appSidebar';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import Header from '@/components/header/header';
import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full">
      <SidebarProvider>
        <div className="mt-4"></div>
        <main className="flex w-full flex-row">
          <AppSidebar />

          <div className="m-2 flex-1 w-full min-w-0 border-2 border-sidebar-border bg-sidebar rounded-lg">
            {children}
          </div>
        </main>
      </SidebarProvider>
    </div>
  );
};

export default Layout;
