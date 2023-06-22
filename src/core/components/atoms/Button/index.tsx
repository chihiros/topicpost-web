import React, { ReactNode } from 'react';
import { Button } from './Button';

type ButtonProps = {
  onClick?: () => void;
  className?: string;
  children: ReactNode;
};

export const SuccessButton: React.FC<ButtonProps> = ({ onClick, className, children }) => {
  return <Button onClick={onClick} className={className} success>{children}</Button>;
};

export const WarnButton: React.FC<ButtonProps> = ({ onClick, className, children }) => {
  return <Button onClick={onClick} className={className} warn>{children}</Button>;
};

export const ErrorButton: React.FC<ButtonProps> = ({ onClick, className, children }) => {
  return <Button onClick={onClick} className={className} error>{children}</Button>;
};

export const SubmitButton: React.FC<ButtonProps> = ({ onClick, className, children }) => {
  return <Button onClick={onClick} className={className} submit>{children}</Button>;
};

export {
  Button,
}
