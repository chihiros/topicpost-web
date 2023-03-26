import React from 'react';

type TextProps = {
  id: string;
  type: string;
  placeholder?: string;
  required?: boolean;
};

const Text: React.FC<TextProps> = ({ id, type, placeholder, required }) => {
  return (
    <input
      type={type}
      id={id}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      placeholder={placeholder}
      {...(required ? { required } : {})}
    />
  );
};

export default Text;
