import React from 'react';
// import { AiFillWarning } from 'react-icons/ai';

type NoteProps = {
  type: 'info' | 'warn' | 'alert';
  className?: string;
  children: React.ReactNode;
};

export const Note: React.FC<NoteProps> = ({ type, children, className }) => {
  switch (type) {
    case 'info':
      className += ' bg-[#e3f7df] text-green-700';
      break;
    case 'warn':
      className += ' bg-[#fdf9e2] text-yellow-700';
      // children = <><AiFillWarning/>{children}</>;
      break;
    case 'alert':
      className += ' bg-[#feebee] text-red-700';
      break;
  }

  return (
    <div className={`p-4 rounded ${className}`}>
      {children}
    </div>
  );
};
