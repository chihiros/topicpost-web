import React, { createContext, useState, useContext } from 'react';
import ProfileAPI, { ProfileData, ProfileResponse } from '../api/api.topicpost.net/profile';

interface ProfileDataContextType {
  profileData?: ProfileData;
  setProfileData: React.Dispatch<React.SetStateAction<ProfileData | undefined>>;
  getProfileData: () => void;
  isProfileDataUndefined: boolean;
}

export const ProfileDataContext = createContext<ProfileDataContextType>({
  profileData: undefined,
  setProfileData: () => { },
  getProfileData: () => { },
  isProfileDataUndefined: true,
});

export const useProfileDataContext = () => {
  return useContext(ProfileDataContext);
};

interface Props {
  children: React.ReactNode;
}

export const ProfileDataContextProvider: React.FC<Props> = ({ children }) => {
  const [profileData, setProfileData] = useState<ProfileData>();
  const isProfileDataUndefined = profileData === undefined;

  const getProfileData = async () => {
    const profile = new ProfileAPI();
    await profile.get()
      .then((response: ProfileResponse) => {
        console.log(response);
        setProfileData(response.data);
      })
      .catch((error) => {
        console.log("ProfileData.error", error);
      });
  };

  return (
    <ProfileDataContext.Provider value={{ profileData, setProfileData, getProfileData, isProfileDataUndefined }}>
      {children}
    </ProfileDataContext.Provider>
  );
};
