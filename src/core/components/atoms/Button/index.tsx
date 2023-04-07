import React, { ReactNode } from 'react';
import Button from './Button';

type ButtonProps = {
  onClick?: () => void;
  children: ReactNode;
};

export const SuccessButton: React.FC<ButtonProps> = ({ onClick, children }) => {
  return <Button onClick={onClick} success>{children}</Button>;
};

export const WarnButton: React.FC<ButtonProps> = ({ onClick, children }) => {
  return <Button onClick={onClick} warn>{children}</Button>;
};

export const ErrorButton: React.FC<ButtonProps> = ({ onClick, children }) => {
  return <Button onClick={onClick} error>{children}</Button>;
};

export const SubmitButton: React.FC<ButtonProps> = ({ onClick, children }) => {
  return <Button onClick={onClick} submit>{children}</Button>;
};
