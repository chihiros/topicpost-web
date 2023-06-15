import React from 'react';

type TextareaProps = {
  id: string;
  rows?: number;
  className?: React.ReactNode;
  placeholder?: string;
  required?: boolean;
  value?: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onDragOver?: (e: React.DragEvent<HTMLTextAreaElement>) => void;
  onDrop?: (e: React.DragEvent<HTMLTextAreaElement>) => void;
  onPaste?: (e: React.ClipboardEvent<HTMLTextAreaElement>) => void;
};

const Textarea: React.FC<TextareaProps> = ({ id, rows, className, placeholder, required, value, disabled, onChange, onDragOver, onDrop, onPaste }) => {
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
      onDragOver={onDragOver}
      onDrop={onDrop}
      onPaste={onPaste}
      {...(disabled ? { disabled } : {})}
    ></textarea>
  );
}

export default Textarea;
