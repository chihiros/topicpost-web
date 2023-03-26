import React from 'react';

type LabelProps = {
  htmlFor: string;
  children: string;
};

const Label: React.FC<LabelProps> = ({ htmlFor, children }) => {
  return (
    <label htmlFor={htmlFor} className="block mb-2 text-sm font-medium text-gray-900">
      {children}
    </label>
  );
};

export default Label;
