import React, { ReactNode } from 'react';

type ButtonProps = {
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  success?: boolean;
  warn?: boolean;
  error?: boolean;
  submit?: boolean;
};

const Styles = {
  success: 'bg-green-500 hover:bg-green-600',
  warn: 'bg-yellow-500 hover:bg-yellow-600',
  error: 'bg-red-500 hover:bg-red-600',
  submit: 'text-white bg-blue-700 hover:bg-blue-800',
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  className,
  success,
  warn,
  error,
  submit,
}) => {
  className += ' ';
  className += success ? Styles.success : '';
  className += warn ? Styles.warn : '';
  className += error ? Styles.error : '';
  className += submit ? Styles.submit : '';

  return (
    <button
      onClick={onClick ? onClick : () => {}}
      className={`${className} py-2 px-4 rounded-lg`}
      type={submit ? 'submit' : 'button'}
    >
      {children}
    </button>
  );
};
