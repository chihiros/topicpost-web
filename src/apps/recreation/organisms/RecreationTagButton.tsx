import React from 'react';

type Props = {
  id: string;
  children?: React.ReactNode;
  isChecked: boolean;
  setIsChecked: (value: boolean) => void;
};

export const TagButton: React.FC<Props> = ({ id, children, isChecked, setIsChecked }) => {
  return (
    <>
      <style>
        {`
      .user-select-none {
        user-select: none;
      }
    `}
      </style>
      <div className="mr-1 mb-1 inline-block">
        <input
          type="checkbox"
          id={id}
          hidden
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)} />
        <label
          htmlFor={id}
          className={
            `p-1 rounded-lg text-xs border border-gray-500 user-select-none
          ${isChecked ?
              'bg-cyan-400 text-slate-700' : 'bg-slate-200 text-slate-400'
            }`}
        >
          {children || ''}</label>
      </div>
    </>
  );
};
