import React, { useState, useEffect } from 'react';
import Toast from '../../../../utils/Toast';
import { Profile, ProfileResponse, ProfileData } from '../../../../api/api.topicpost.net/profile';

const SidebarLoggedIn: React.FC = () => {
  const [profileData, setProfileData] = useState<ProfileData | null>(null); //プロフィールデータを状態として保存

  useEffect(() => {
    const profile = new Profile();
    const toast = new Toast();
    profile.get()
      .then((response: ProfileResponse) => {
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

        setProfileData(response.data[0]);
      })
      .catch((error: any) => {
        console.error(error);
        toast.error('エラーが発生しました');
      });
  }, []);

  return (
    <div>
      {profileData && ( //データがあれば表示する
        <div className="flex flex-col items-center justify-center hover:bg-gray-100 rounded-md p-3 mx-3 h-24">
          <img className="w-12 h-12 mb-3 rounded-full"
            src={profileData.icon_url} //状態からアイコンを表示
            alt=""
          />
          <div className="flex justify-center text-sm text-slate-500">
            {profileData.nickname} {/* 状態からユーザー名を表示 */}
          </div>
        </div>
      )}
    </div>
  );
}

export default SidebarLoggedIn;
