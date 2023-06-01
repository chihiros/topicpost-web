import React, { createContext, useState, useEffect, useContext } from 'react';
import { supabaseClient } from '../utils/supabase';

interface AuthContextType {
  isLoggedIn: boolean;
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  getLoggedIn: () => boolean;
}

export const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  setLoggedIn: () => {},
  getLoggedIn: () => false,
});

export const useAuthContext = () => {
  return useContext(AuthContext);
};

interface Props {
  children: React.ReactNode;
}

export const AuthContextProvider: React.FC<Props> = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabaseClient.auth.getSession();
      setLoggedIn(session !== null);
    };
    checkSession();

    supabaseClient.auth.onAuthStateChange((event) => {
      if (event === 'SIGNED_IN' || event === 'USER_UPDATED') {
        setLoggedIn(true);
      } else if (event === 'SIGNED_OUT') {
        setLoggedIn(false);
      }
    });
  }, []);

  const getLoggedIn = () => {
    return isLoggedIn;
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, setLoggedIn, getLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};
