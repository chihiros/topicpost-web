import React, { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ children, className }) => {
  return (
    <button className={`${className} py-2 px-4 rounded`} type="button">
      {children}
    </button>
  );
};

export default Button;
