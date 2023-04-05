import React from 'react';

type TextProps = {
  id: string;
  type: string;
  placeholder?: string;
  required?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Text: React.FC<TextProps> = ({ id, type, placeholder, required, value, onChange }) => {
  const [isFocused, setIsFocused] = React.useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const borderColor = isFocused ? 'border-blue-500' : 'border-gray-300';

  return (
    <input
      type={type}
      id={id}
      className={`bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 ${borderColor}`}
      {...(placeholder ? { placeholder } : {})}
      {...(required ? { required } : {})}
      {...(value ? { value } : {})}
      {...(onChange ? { onChange } : {})}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  );
};

export default Text;
