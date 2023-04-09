import React from 'react';
import { Link } from 'react-router-dom';
import SidebarLoggedIn from '../../../core/components/organisms/Sidebar/SidebarLoggedIn';
import { SidebarQuestion } from '../../../core/components/organisms/Sidebar/SidebarQuestion';
import SidebarLogin from '../../../core/components/organisms/Sidebar/SidebarLogin';
import SidebarLabel from '../../../core/components/organisms/Sidebar/SidebarLabel';
import { sidebar } from '../../../constants/sidebar';
import { supabaseClient } from '../../../utils/supabase';
import { useAuthContext } from '../../../context/AuthContext';

const SidebarPage: React.FC = () => {
  const { setLoggedIn, getLoggedIn } = useAuthContext();

  return (
    <aside id="logo-sidebar" className="fixed top-0 left-0 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 shadow" aria-label="Sidebar">
      <div className="h-full py-4 overflow-y-auto bg-gray-50">
        <Link to="/" className="flex justify-center pt-2 pb-4">
          <span className="text-3xl font-semibold hover:text-gray-400">TopicPost</span>
        </Link>

        {getLoggedIn() && (
          <>
          </>
        )}
        {!getLoggedIn() && (
          <>
            <SidebarLogin />
          </>
        )}

        {sidebar.map((label, index) => (
          <SidebarLabel
            key={index}
            icon={label.icon}
            label={label.label}
            link={label.link}
          />
        ))}
        <button onClick={() => {
          supabaseClient.auth.signOut();
          setLoggedIn(false);
          sessionStorage.removeItem('last_access_date');
        }}>ログアウト</button>
      </div>
    </aside>
  );
}

export default SidebarPage;
