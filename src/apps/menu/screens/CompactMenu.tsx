import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { useLoginModal } from "../../../context/LoginModalContext";
import { sidebar } from "../../../constants/sidebar";
import Twemoji from "react-twemoji";
import { supabaseClient } from '../../../utils/supabase';
import { useAuthContext } from '../../../context/AuthContext';
import { useProfileDataContext } from "../../../context/ProfileDataContext";

export const CompactMenu = () => {
  const { toggle } = useLoginModal();
  const [isOpen, setIsOpen] = useState(false);
  const { isLoggedIn, setLoggedInFalse } = useAuthContext();
  const { getProfileNickName, getProfileIconUrl } = useProfileDataContext();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    supabaseClient.auth.signOut();
    setLoggedInFalse();
    sessionStorage.removeItem('last_access_date');
  };

  return (
    <div className="transition-transform lg:-translate-x-full translate-x-0 lg:hidden">
      <nav className="bg-gray-50 border-gray-200 rounded-b-2xl">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
          <a className="" href="/">
            <span className="text-2xl font-semibold hover:text-gray-400">TopicPost</span>
          </a>
          <div className="flex items-center">
            {!isLoggedIn && (
              <button
                className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 focus:outline-none"
                onClick={toggle}
              >
                Login
              </button>
            )}
            <button
              data-collapse-toggle="mega-menu"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="mega-menu"
              aria-expanded="false"
              onClick={toggleDropdown}
            >
              <span className="sr-only">Open main menu</span>
              <FiMenu size={24} />
            </button>
          </div>
          <div
            id="mega-menu"
            className={`overflow-hidden transition-all
              ${isOpen ? "max-h-screen" : "max-h-0"}
              items-center justify-between w-full`}
          >
            <ul className="flex flex-col mt-4 font-medium">
              {sidebar.map((item, index) => (
                <li key={index} className="">
                  <a href={item.link} className="flex items-center space-x-2">
                    <Twemoji
                      options={{
                        className: "w-6 h-6",
                      }}
                    >{item.icon}</Twemoji>
                    <span
                      className="py-2 pl-2 text-gray-700 hover:bg-gray-50 font-medium text-xl"
                    >
                      {item.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <button
                onChange={handleLogout}
                className="bg-slate-300 hover:bg-slate-700 text-white text-base font-bold py-2 px-4 rounded"
              >
                ログアウト
              </button>
            </div>
            <div className="flex items-center">
              {isLoggedIn ? "ログインしています" : "ログインしていません"}
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
