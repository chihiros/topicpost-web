import React, { createContext, useState, useCallback, useMemo, useContext } from 'react';

interface LoginModalContextType {
  isOpen:boolean;
  toggle: () => void;
}

export const LoginModalContext = createContext<LoginModalContextType>({
  isOpen: false,
  toggle: () => {},
});

export const useLoginModal = () => {
  return useContext(LoginModalContext);
};

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
