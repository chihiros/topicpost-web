import React, { createContext, useState } from 'react';

interface LoginModalContextType {
  isOpen:boolean;
  toggle: () => void;
}

const LoginModalContext = createContext<LoginModalContextType>({
  isOpen: false,
  toggle: () => {},
});

interface Props {
  children: React.ReactNode;
}

export const LoginModalProvider = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <LoginModalContext.Provider value={{ isOpen, toggle }}>
      {children}
    </LoginModalContext.Provider>
  );
};

export default LoginModalContext;
