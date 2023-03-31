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
      className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
    >
      <span className='mr-3'>{icon}</span>
      <span>{children}</span>
    </button>
  );
}
