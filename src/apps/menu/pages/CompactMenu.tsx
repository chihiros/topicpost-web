import React from "react";

export const CompactMenu = () => {
  return (<div className="transition-transform lg:-translate-x-full translate-x-0 lg:hidden">
    <nav className="bg-gray-50 border-gray-200">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
        <a href="https://flowbite.com" className="flex items-center">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap">Flowbite</span>
        </a>
        <div className="flex items-center md:order-2">
          <a href="/" className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 focus:outline-none">Login</a>
          <a href="/" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 focus:outline-none">Sign up</a>
          <button data-collapse-toggle="mega-menu" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="mega-menu" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
          </button>
        </div>
        <div id="mega-menu" className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
          <ul className="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
            <li>
              <a href="/" className="block py-2 pl-3 pr-4 text-blue-600 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0" aria-current="page">Home</a>
            </li>
            <li>
              <button id="mega-menu-dropdown-button" data-dropdown-toggle="mega-menu-dropdown" className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0">
                Company <svg aria-hidden="true" className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </button>
              <div id="mega-menu-dropdown" className="absolute z-10 grid hidden w-auto grid-cols-2 text-sm bg-white border border-gray-100 rounded-lg shadow-md md:grid-cols-3">
                <div className="p-4 pb-0 text-gray-900 md:pb-4">
                  <ul className="space-y-4" aria-labelledby="mega-menu-dropdown-button">
                    <li>
                      <a href="/" className="text-gray-500 hover:text-blue-600">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="/" className="text-gray-500 hover:text-blue-600">
                        Library
                      </a>
                    </li>
                    <li>
                      <a href="/" className="text-gray-500 hover:text-blue-600">
                        Resources
                      </a>
                    </li>
                    <li>
                      <a href="/" className="text-gray-500 hover:text-blue-600">
                        Pro Version
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="p-4 pb-0 text-gray-900 md:pb-4">
                  <ul className="space-y-4">
                    <li>
                      <a href="/" className="text-gray-500 hover:text-blue-600">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a href="/" className="text-gray-500 hover:text-blue-600">
                        Newsletter
                      </a>
                    </li>
                    <li>
                      <a href="/" className="text-gray-500 hover:text-blue-600">
                        Playground
                      </a>
                    </li>
                    <li>
                      <a href="/" className="text-gray-500 hover:text-blue-600">
                        License
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="p-4">
                  <ul className="space-y-4">
                    <li>
                      <a href="/" className="text-gray-500 hover:text-blue-600">
                        Contact Us
                      </a>
                    </li>
                    <li>
                      <a href="/" className="text-gray-500 hover:text-blue-600">
                        Support Center
                      </a>
                    </li>
                    <li>
                      <a href="/" className="text-gray-500 hover:text-blue-600">
                        Terms
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <a href="/" className="block py-2 pl-3 pr-4 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0">Team</a>
            </li>
            <li>
              <a href="/" className="block py-2 pl-3 pr-4 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  )
}
