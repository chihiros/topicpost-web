import React from 'react';

type TextareaProps = {
  id: string;
  rows?: number;
  className?: string;
  placeholder?: string;
  required?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const Textarea: React.FC<TextareaProps> = ({ id, rows, className, placeholder, required, value, onChange }) => {
  const [isFocused, setIsFocused] = React.useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const borderColor = isFocused ? 'border-blue-500 ring-1 ring-blue-500' : 'border-gray-300';

  return (
    <textarea
      id={id}
      rows={rows || 4}
      className={`border text-gray-900 text-sm rounded-lg block w-full p-2.5 ${borderColor} ${className}`}
      placeholder={placeholder || ''}
      {...(required ? { required } : {})}
      {...(value ? { value } : {})}
      {...(onChange ? { onChange } : {})}
      onFocus={handleFocus}
      onBlur={handleBlur}
    ></textarea>
  );
}

export default Textarea;
