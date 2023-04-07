import React, { ReactNode } from 'react';
import Button from './Button';

type ButtonProps = {
  children: ReactNode;
};

export const SuccessButton: React.FC<ButtonProps> = ({ children }) => {
  return <Button
           className='bg-green-500 hover:bg-green-600'
         >{children}</Button>;
};

export const WarnButton: React.FC<ButtonProps> = ({ children }) => {
  return <Button
           className='bg-yellow-500 hover:bg-yellow-600'
         >{children}</Button>;
};

export const ErrorButton: React.FC<ButtonProps> = ({ children }) => {
  return <Button
           className='bg-red-500 hover:bg-red-600'
         >{children}</Button>;
};

export const SubmitButton: React.FC<ButtonProps> = ({ children }) => {
  return <Button
           className='text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5'
         >{children}</Button>;
};
