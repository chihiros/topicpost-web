import React, { ReactNode } from 'react';

export interface AuthProviderProps {
  icon: ReactNode;
  children: string;
  color: string;
  link: string;
}

export const AuthProviderButton: React.FC<AuthProviderProps> = ({ icon, children, color, link}) => {
  return (
    <button className="group w-full h-10 px-4 border-2 border-gray-300 rounded-full transition duration-300
                       hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
     <div className="relative flex items-center space-x-4 justify-start">
        {icon}
        <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">{children}</span>
      </div>
    </button>
  );
}
