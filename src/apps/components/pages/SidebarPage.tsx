import React from 'react';
import { Link } from 'react-router-dom';
import SidebarLoggedIn from '../../../core/components/organisms/Sidebar/SidebarLoggedIn';
// import { SidebarQuestion } from '../../../core/components/organisms/Sidebar/SidebarQuestion';
import SidebarLogin from '../../../core/components/organisms/Sidebar/SidebarLogin';
import SidebarLabel from '../../../core/components/organisms/Sidebar/SidebarLabel';
import { sidebar } from '../../../constants/sidebar';
import { supabaseClient } from '../../../utils/supabase';
import { useAuthContext } from '../../../context/AuthContext';

const SidebarPage: React.FC = () => {
  const { setLoggedIn, getLoggedIn } = useAuthContext();

  const handleLogout = () => {
      supabaseClient.auth.signOut();
      setLoggedIn(false);
      sessionStorage.removeItem('last_access_date');
  };

  // これする意味ないかも
  const SidebarStyle = "transition-transform -translate-x-full md:translate-x-0";

  return (
    <aside
      id="logo-sidebar"
      className={`fixed top-0 left-0 w-64 h-screen shadow ${SidebarStyle}`}
      aria-label="Sidebar"
    >
      <div className="h-full py-4 overflow-y-auto bg-gray-50">
        <Link to="/" className="flex justify-center pt-2 pb-4">
          <span className="text-3xl font-semibold hover:text-gray-400">TopicPost</span>
        </Link>

        {getLoggedIn() ? <SidebarLoggedIn /> : <SidebarLogin />}

        {sidebar.map((label, index) => (
          <SidebarLabel
            key={index}
            icon={label.icon}
            label={label.label}
            link={label.link}
          />
        ))}
        <div className="mt-4">
          <button
            onClick={handleLogout}
            className="bg-slate-300 hover:bg-slate-700 text-white text-base font-bold py-2 px-4 rounded"
          >
            ログアウト
          </button>
        </div>
      </div>
    </aside>
  );
}

export default SidebarPage;
