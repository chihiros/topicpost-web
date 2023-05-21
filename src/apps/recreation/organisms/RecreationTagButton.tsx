import React from 'react';

type Props = {
  children?: React.ReactNode;
  isChecked: boolean;
  setIsChecked: (value: boolean) => void;
};

export const TagButton: React.FC<Props> = ({ children, isChecked, setIsChecked }) => {
  return (
    <div className="mr-1 mb-1 inline-block">
      <input
        type="checkbox"
        id="check1"
        hidden
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)} />
      <label
        htmlFor="check1"
        id="button"
        className={
          `p-1 rounded-lg text-xs border border-gray-500
              ${isChecked ?
            'bg-cyan-400 text-slate-700' : 'bg-slate-200 text-slate-400'
          }`}
      >
        {children || ''}</label>
    </div>
  );
};
