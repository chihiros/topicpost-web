import React from 'react';

type TextProps = {
  id: string;
  type: string;
  placeholder?: string;
  required?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Text: React.FC<TextProps> = ({ id, type, placeholder, required, value, onChange }) => {
  return (
    <input
      type={type}
      id={id}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      placeholder={placeholder}
      {...(required ? { required } : {})}
      {...(value ? { value } : {})}
      {...(onChange ? { onChange } : {})}
    />
  );
};

type TextareaProps = {
  id: string;
  rows?: number;
  placeholder?: string;
  required?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export const Textarea: React.FC<TextareaProps> = ({ id, rows, placeholder, required, value, onChange }) => {
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
