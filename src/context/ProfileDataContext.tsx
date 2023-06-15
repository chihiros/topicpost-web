import React, { createContext, useState, useContext } from 'react';
import ProfileAPI, { ProfileData, ProfileResponse } from '../api/api.topicpost.net/profile';

interface ProfileDataContextType {
  profileData?: ProfileData;
  setProfileData: React.Dispatch<React.SetStateAction<ProfileData | undefined>>;
  getProfileData: () => void;
  isProfileDataUndefined: boolean;
  getProfileNickName: () => string;
  getProfileIconUrl: () => string;
}

export const ProfileDataContext = createContext<ProfileDataContextType>({
  profileData: undefined,
  setProfileData: () => { },
  getProfileData: () => { },
  isProfileDataUndefined: true,
  getProfileNickName: () => { return ""; },
  getProfileIconUrl: () => { return ""; },
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

  const getProfileNickName = () => {
    if (profileData === undefined) {
      return "";
    } else {
      return profileData.nickname;
    }
  };

  const getProfileIconUrl = () => {
    if (profileData === undefined) {
      return "";
    } else {
      return profileData.icon_url;
    }
  };

  return (
    <ProfileDataContext.Provider value={{ profileData, setProfileData, getProfileData, isProfileDataUndefined, getProfileNickName, getProfileIconUrl }}>
      {children}
    </ProfileDataContext.Provider>
  );
};
