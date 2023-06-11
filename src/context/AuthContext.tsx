import React, { createContext, useState, useEffect, useContext } from 'react';
import { supabaseClient } from '../utils/supabase';
import ProfileAPI, { ProfileData, ProfileResponse } from '../api/api.topicpost.net/profile';
import { useProfileDataContext } from './ProfileDataContext';

interface AuthContextType {
  isLoggedIn: boolean;
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  setLoggedInTrue: () => void;
  setLoggedInFalse: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  setLoggedIn: () => { },
  setLoggedInTrue: () => { },
  setLoggedInFalse: () => { },
});

export const useAuthContext = () => {
  return useContext(AuthContext);
};

interface Props {
  children: React.ReactNode;
}

export const AuthContextProvider: React.FC<Props> = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const { profileData, setProfileData, getProfileData, isProfileDataUndefined } = useProfileDataContext();

  const setLoggedInTrue = () => {
    setLoggedIn(true);
    getProfileData();
  };

  const setLoggedInFalse = () => {
    setLoggedIn(false);
    setProfileData(undefined);
  };

  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabaseClient.auth.getSession();
      setLoggedIn(session !== null);
    };
    checkSession();

    supabaseClient.auth.onAuthStateChange((event) => {
      if (event === 'SIGNED_IN' || event === 'USER_UPDATED') {
        setLoggedInTrue();
      } else if (event === 'SIGNED_OUT') {
        setLoggedInFalse();
        setProfileData(undefined);
      }
    });
    if (isProfileDataUndefined) { // プロフォールが取得されていない場合
      if (!isLoggedIn) { // ログインしていない場合
        getProfileData();
      }
    }
  }, [isLoggedIn, profileData, isProfileDataUndefined]);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setLoggedIn, setLoggedInTrue, setLoggedInFalse }}>
      {children}
    </AuthContext.Provider>
  );
};
