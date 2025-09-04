import { AppSidebar } from '@/components/sidebar/appSidebar'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import React from 'react'


const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
        <SidebarProvider>
            
            <AppSidebar />
            <main>
                <SidebarTrigger />
                {children}
            </main>
        </SidebarProvider>
    </div>
  )
}

export default Layout