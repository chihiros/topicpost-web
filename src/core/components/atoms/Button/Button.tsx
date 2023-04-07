import React, { ReactNode } from 'react';

type ButtonProps = {
  onClick?: () => void;
  children: ReactNode;
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

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  success,
  warn,
  error,
  submit,
}) => {
  let className = '';
  className = success ? Styles.success : className;
  className = warn ? Styles.warn : className;
  className = error ? Styles.error : className;
  className = submit ? Styles.submit : className;

  return (
    <button
      onClick={onClick ? onClick : () => {}}
      className={`${className} py-2 px-4 rounded`}
      type="button">
      {children}
    </button>
  );
};

export default Button;
