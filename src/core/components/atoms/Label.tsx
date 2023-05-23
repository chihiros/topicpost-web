import React from 'react';

type LabelProps = {
  htmlFor?: string;
  children: React.ReactNode;
  className?: string;
  required?: boolean;
};

const Label: React.FC<LabelProps> = ({ htmlFor, children, className, required }) => {
  return (
    <label htmlFor={htmlFor} className={`block mb-2 text-sm font-medium text-gray-900 ${className}`}>
      {children}{required && <sup className="text-red-500">*必須</sup>}
    </label>
  );
};

export default Label;
