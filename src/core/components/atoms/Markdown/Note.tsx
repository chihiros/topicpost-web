import React from 'react';

export const Note: React.FC<{ type: string, children: React.ReactNode }> = ({ type, children }) => {
  let bgColor;
  let borderColor;

  if (type === 'info') {
    bgColor = 'bg-blue-100';
    borderColor = 'border-blue-500';
  } else if (type === 'warn') {
    bgColor = 'bg-yellow-100';
    borderColor = 'border-yellow-500';
  } else if (type === 'alert') {
    bgColor = 'bg-red-100';
    borderColor = 'border-red-500';
  }

  return (
    <div className={`p-4 border-l-4 ${borderColor} ${bgColor}`}>
      {children}
    </div>
  );
};
