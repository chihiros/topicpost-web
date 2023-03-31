import React, { ReactNode } from 'react';

export interface AuthProviderProps {
  icon: ReactNode;
  children: string;
  color: string;
  link: string;
}

export const AuthProviderButton: React.FC<AuthProviderProps> = ({ icon, children, color, link}) => {
  return (
    <button
      type="button"
      className="grid grid-cols-3 items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
    >
      <span className='tile col-span-1 m-auto'>{icon}</span>
      <span className='tile col-span-2 mr-auto'>{children}</span>
    </button>
  );
}
