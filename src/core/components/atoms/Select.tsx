import React from "react"

type SelectProps = {
  id: string;
  className?: string;
  children: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Select: React.FC<SelectProps> = ({id, className, children }) => {
  return (
    <select
      id={id}
      className={`block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer ${className}`}
    >
      {children}
    </select>
  );
}
