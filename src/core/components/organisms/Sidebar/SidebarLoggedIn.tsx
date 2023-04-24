import React, { useState, useEffect } from 'react';
import Toast from '../../../../utils/Toast';
import { Profile, ProfileResponse } from '../../../../api/api.topicpost.net/profile';

const SidebarLoggedIn: React.FC = () => {
  const [profileData, setProfileData] = useState<ProfileResponse | null>(null);

  useEffect(() => {
    const profile = new Profile();
    const toast = new Toast();
    profile.get()
      .then((response: any) => {
        console.log("SidebarLoggedIn:", response);
        if (response.status !== 200) {
          console.error(response);
          toast.error('送信に失敗しました');
          return;
        }

        if (response.data.length === 0) {
          toast.error('プロフィールが存在しません');
          return;
        }

        setNickname(response.data[0].nickname);
        setIconUrl(response.data[0].icon_url);
      })
      .catch((error: any) => {
        console.error(error);
        toast.error('エラーが発生しました');
      });
  }, []);


  return (
    <div>
      <div className="flex flex-col items-center justify-center hover:bg-gray-100 rounded-md p-3 mx-3 h-24">
        <img className="w-12 h-12 rounded-full mb-3"
          src={iconUrl}
          alt=""
        />
        <div className="flex justify-center text-sm text-gray-500">{nickname}</div>
      </div>
    </div>
  );
}

export default SidebarLoggedIn;
