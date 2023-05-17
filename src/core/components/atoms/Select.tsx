import React from "react"

type SelectProps = {
  id: string;
  className?: string;
  children: React.ReactNode;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const Select: React.FC<SelectProps> = ({id, className, children, value, onChange }) => {
  return (
    <select
      id={id}
      onChange={onChange}
      value={value}
      className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${className}`}
    >
      {children}
    </select>
  );
}
