import React, { ReactNode } from 'react';
import Button from './Button';

type ButtonProps = {
  children: ReactNode;
};

export const SuccessButton: React.FC<ButtonProps> = ({ children }) => {
  return <Button success>{children}</Button>;
};

export const WarnButton: React.FC<ButtonProps> = ({ children }) => {
  return <Button warn>{children}</Button>;
};

export const ErrorButton: React.FC<ButtonProps> = ({ children }) => {
  return <Button error>{children}</Button>;
};
