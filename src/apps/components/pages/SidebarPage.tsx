import React from 'react';
import SidebarLogin from '../../../core/components/organisms/Sidebar/SidebarLogin';
import SidebarLabel from '../../../core/components/organisms/Sidebar/SidebarLabel';
import SidebarFooter from '../../../core/components/organisms/Sidebar/SidebarFooter';
import { sidebar } from './sidebar';

const SidebarPage: React.FC = () => {
  return (
    <aside id="logo-sidebar" className="fixed top-0 left-0 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 shadow" aria-label="Sidebar">
      <div className="h-full py-4 overflow-y-auto bg-gray-50">
        <a href="/" className="flex justify-center pt-2 pb-4">
          <span className="text-3xl font-semibold hover:text-gray-400">TopicPost</span>
        </a>
        <SidebarLogin />
        {sidebar.map((label, index) => (
          <SidebarLabel
            key={index}
            icon={label.icon}
            label={label.label}
            link={label.link}
          />
        ))}
      </div>
      <SidebarFooter />
    </aside>
  );
}

export default SidebarPage;
