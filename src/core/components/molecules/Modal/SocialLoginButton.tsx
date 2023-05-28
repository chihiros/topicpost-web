import React, { ReactNode } from 'react';

export interface SocialLoginProps {
  icon: ReactNode;
  children: string;
  link: string;
}

export const SocialLoginButton: React.FC<SocialLoginProps> = ({ icon, children, link }) => {
  return (
    <button className="group w-full h-10 px-4 border-2 border-gray-300 rounded-full transition duration-300
                       hover:border-blue-400 active:bg-blue-100">
      <div className="relative items-center space-x-4 justify-start grid grid-cols-4">
        <span className="tile ml-auto">{icon}</span>
        <span className="tile block w-max font-semibold tracking-wide text-gray-700 text-base transition duration-300 group-hover:text-blue-600">{children}</span>
      </div>
    </button>
  );
}
