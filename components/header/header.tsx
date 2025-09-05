import React from 'react';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Search } from './search';
import { ModeToggle } from '../dark-light/themeToggle';
import { Settings } from './settings';

const Header = () => {
  return (
    <div className="p-4 border-b border-sidebar-border">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <SidebarTrigger />
          <div className="border-l border-sidebar-border h-4"></div>
          <h4 className=" font-medium">Dashboard</h4>
        </div>
        <Search />
        <div className="flex items-center gap-2">
          <ModeToggle />
          <Settings />
        </div>
      </div>
    </div>
  );
};

export default Header;
