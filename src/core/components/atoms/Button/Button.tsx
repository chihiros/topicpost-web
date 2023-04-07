import React, { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  success?: boolean;
  warn?: boolean;
  error?: boolean;
};

const Button: React.FC<ButtonProps> = ({ children, success, warn, error }) => {
  let className = '';
  if (success) {
    className = 'bg-green-500 hover:bg-green-600';
  } else if (warn) {
    className = 'bg-yellow-500 hover:bg-yellow-600';
  } else if (error) {
    className = 'bg-red-500 hover:bg-red-600';
  }

  return (
    <button className={`${className} py-2 px-4 rounded`} type="button">
      {children}
    </button>
  );
};

export default Button;

// text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5
