import React from "react";

function Sidebar() {
  return (
    <div className="flex flex-col w-80 h-screen bg-neutral-100 border-collapse border-r-2 border-slate-300">
      <div className="flex flex-col items-center justify-center h-20 bg-slate-800">
        <div className="flex items-center justify-center w-12 h-12 bg-slate-700 rounded-full">
          <svg className="w-6 h-6 text-slate-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </div>
      </div>
      <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <nav className="flex flex-col flex-1">
          <a className="flex items-center flex-shrink-0 px-4 h-12 mt-3" href="https://example.com">
            <span className="flex items-center justify-center w-8 h-8 {/*text-slate-100 bg-slate-700*/} rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </span>
            <span className="mx-2 text-md font-medium text-slate-700">レクリエーション</span>
          </a>

          {/* <hr className="w-48 h-1 mx-auto my-3 bg-slate-300 border-0 rounded md:my-3 dark:bg-gray-700" /> */}

          {/* <a className="flex items-center flex-shrink-0 px-4 h-12" href="https://example.com">
            <span className="flex items-center justify-center w-12 h-12 text-slate-100 bg-slate-700 rounded-lg">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </span>
            <span className="mx-2 text-sm font-medium text-slate-100">Dashboard</span>
          </a> */}
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
