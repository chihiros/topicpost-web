import React from 'react';

type BreadcrumbProps = {
  href: string;
  label: string;
}

const Header: React.FC<{ breadcrumb?: BreadcrumbProps[] }> = ({ breadcrumb }) => {
  return (
    <nav className="flex h-12 mb-5 px-5 p-4 py-3 shadow rounded-lg bg-gray-50 text-gray-500" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        {/* Homeは固定で入れておく */}
        <li className="inline-flex items-center">
          <a href="/" className="inline-flex items-center text-sm font-medium hover:text-blue-600">
            <svg aria-hidden="true" className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
            Home
          </a>
        </li>
        {breadcrumb && breadcrumb.map((item, index) =>  {
          if (breadcrumb.length - 1 !== index) {
            return (
              <li>
                <div className="flex items-center">
                  <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                  <a href={item.href} className="ml-1 text-sm font-medium md:ml-2 hover:text-blue-600">{item.label}</a>
                </div>
              </li>
            );
          } else {
            return (
              <li aria-current="page">
                <div className="flex items-center">
                  <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                  <span className="ml-1 text-sm font-medium md:ml-2">{item.label}</span>
                </div>
              </li>
            );
          }
        })}
      </ol>
    </nav>
  );
}

export default Header;
