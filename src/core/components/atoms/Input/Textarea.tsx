import React from 'react';

type TextareaProps = {
  id: string;
  rows?: number;
  placeholder?: string;
  required?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const Textarea: React.FC<TextareaProps> = ({ id, rows, placeholder, required, value, onChange }) => {
  return (
    <textarea
      id={id}
      rows={rows || 4}
      className="p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
      placeholder={placeholder || ''}
      {...(required ? { required } : {})}
      {...(value ? { value } : {})}
      {...(onChange ? { onChange } : {})}
    ></textarea>
  );
}

export default Textarea;
