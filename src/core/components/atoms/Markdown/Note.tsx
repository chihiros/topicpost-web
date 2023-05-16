import React from 'react';

type NoteProps = {
  type: 'info' | 'warn' | 'alert';
  className?: string;
  children: React.ReactNode;
};

export const Note: React.FC<NoteProps> = ({ type, children, className }) => {
  switch (type) {
    case 'info':
      className += ' bg-blue-100 text-blue-700';
      break;
    case 'warn':
      className += ' bg-yellow-100 text-yellow-700';
      break;
    case 'alert':
      className += ' bg-red-100 text-red-700';
      break;
  }

  return (
    <div className={`p-4 rounded ${className}`}>
      {children}
    </div>
  );
};
