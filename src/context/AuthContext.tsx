import React, { createContext, useState, useEffect, useContext } from 'react';
import { supabaseClient, SupabaseEnableProviders } from '../utils/supabase';
import ProfileAPI from '../api/api.topicpost.net/profile';
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
  const { setProfileData, getProfileData, isProfileDataUndefined } = useProfileDataContext();

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
      if (session !== null) {
        const profile = new ProfileAPI();
        try {
          const response = await profile.get();
          setProfileData(response.data);
        } catch (error) {
          console.log("ProfileData.error", error);
          if (session?.user?.identities && session.user.identities.length > 0) {
            let createProfileFlg = false;
            for (const identity of session.user.identities) {
              if (SupabaseEnableProviders.includes(identity.provider)) {
                createProfileFlg = true;
              }
            }

            if (createProfileFlg) {
              console.log("createProfileFlg", createProfileFlg);
              try {
                const postResponse = await profile.post();
                console.log(postResponse);
              } catch (error) {
                console.log("ProfileData.error", error);
              }
              setLoggedInTrue();
              return;
            }
          }
        }

        setLoggedInTrue();
        return;
      } else {
        setLoggedInFalse();
        return;
      }
    };
    checkSession();

    supabaseClient.auth.onAuthStateChange((event) => {
      if (event === 'SIGNED_IN' || event === 'USER_UPDATED') {
        setLoggedInTrue();
        return;
      } else if (event === 'SIGNED_OUT') {
        setLoggedInFalse();
        return;
      }
    });

    if (!isLoggedIn) { // ログインしていて、プロフォールが取得されていない場合
      if (isProfileDataUndefined) {
        getProfileData();
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setLoggedIn, setLoggedInTrue, setLoggedInFalse }}>
      {children}
    </AuthContext.Provider>
  );
};
