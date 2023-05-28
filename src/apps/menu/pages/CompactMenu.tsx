import React, { useState } from "react";
import { useLoginModal } from "../../../context/LoginModalContext";

export const CompactMenu = () => {
  const { toggle } = useLoginModal();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="transition-transform lg:-translate-x-full translate-x-0 lg:hidden">
    <nav className="bg-gray-50 border-gray-200 rounded-b-3xl">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
        <a className="" href="/">
          <span className="text-2xl font-semibold hover:text-gray-400">TopicPost</span>
        </a>
        <div className="flex items-center md:order-2">
          <button
            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 focus:outline-none"
            onClick={toggle}
          >
            Login
          </button>
          <button
            data-collapse-toggle="mega-menu"
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="mega-menu"
            aria-expanded="false"
            onClick={toggleDropdown}
          >
            <span className="sr-only">Open main menu</span>
            <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
          </button>
        </div>
        <div id="mega-menu" className={`items-center justify-between ${isOpen ? '' : 'hidden'} w-full md:flex md:w-auto md:order-1`}>
          <ul className="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
            <li>
              <a href="/" className="block py-2 pl-3 pr-4 text-blue-600 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0" aria-current="page">Home</a>
            </li>
            <li>
              <a href="/" className="block py-2 pl-3 pr-4 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0">Team</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  )
}
