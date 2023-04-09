import React, { createContext, useState, useEffect, useContext } from 'react';
import { supabaseClient } from '../utils/supabase';

interface AuthContextType {
  isLoggedIn: boolean;
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  setLoggedIn: () => {},
});

export const useAuthContext = () => {
  return useContext(AuthContext);
};

interface Props {
  children: React.ReactNode;
}

export const AuthContextProvider: React.FC<Props> = ({ children }) => {
  const [, setLoggedIn] = useState(false);

  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabaseClient.auth.getSession();
      setLoggedIn(session !== null);
    };
    checkSession();
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn: false, setLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};
