import React from 'react';

type SubmitProps = {
  children: string;
};

const SubmitButton: React.FC<SubmitProps> = ({ children }) => {
  return (
    <button
      type="submit"
      className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5"
    >
      {children}
    </button>
  );
};

export default SubmitButton;
