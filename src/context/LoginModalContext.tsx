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

export const LoginModalProvider: React.FC<Props> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggle = useCallback(() => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }, []);

  const value = useMemo(() => ({ isOpen, toggle }), [isOpen, toggle]);

  return (
    <LoginModalContext.Provider value={value}>
      {children}
    </LoginModalContext.Provider>
  );
};
