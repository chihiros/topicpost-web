import React from 'react';

type SubmitProps = {
  onClick?: () => void;
  children: string;
};

const SubmitButton: React.FC<SubmitProps> = ({ onClick, children }) => {
  return (
    <button
      type="submit"
      onClick={onClick ? onClick : () => {}}
      className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5"
    >
      {children}
    </button>
  );
};

export default SubmitButton;
