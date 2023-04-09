import React from 'react';

type TextProps = {
  id: string;
  type: string;
  className?: string;
  placeholder?: string;
  required?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Text: React.FC<TextProps> = ({ id, type, className, placeholder, required, value, onChange }) => {
  const [isFocused, setIsFocused] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleToggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const inputType = type === 'password' && showPassword ? 'text' : type;
  const icon = showPassword ? '🙈' : '🙉';
  const borderColor = isFocused ? 'border-blue-500 ring-1 ring-blue-500' : 'border-gray-300';

  return (
    <div className="relative">
      <input
        type={inputType}
        id={id}
        className={`border text-gray-900 text-sm rounded-lg block w-full p-2.5 ${borderColor} ${className}`}
        {...(placeholder ? { placeholder } : {})}
        {...(required ? { required } : {})}
        {...(value ? { value } : {})}
        {...(onChange ? { onChange } : {})}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {type === 'password' && (
        <button
          type="button"
          className="absolute right-2 top-2 transform translate-y-1/2 cursor-pointer focus:outline-none"
          onClick={handleToggleShowPassword}
        >
          <span role="img" aria-label="Toggle password visibility">
            {icon}
          </span>
        </button>
      )}
    </div>
  );
};

export default Text;
