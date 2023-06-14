import React, { createContext, useState, useEffect, useContext } from 'react';
import { supabaseClient, SupabaseEnableProviders } from '../utils/supabase';
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
      // setLoggedIn(session !== null);
      if (session !== null) {
        console.log("session !== null");

        if (session?.user?.identities && session.user.identities.length > 0) {
          for (const identity of session.user.identities) {
            console.log("identity.provider:", identity.provider);
            if (SupabaseEnableProviders.includes(identity.provider)) {
              setLoggedInTrue();

              // profileが存在しない場合は登録する
              if (isProfileDataUndefined) {
                const profile = new ProfileAPI();
                profile.post().then((response: ProfileResponse) => {
                  console.log(response);
                }).catch((error) => {
                  console.log("ProfileData.error", error);
                });
                return;
              }
              continue;
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
