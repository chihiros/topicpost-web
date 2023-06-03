import React, { useState, useEffect } from 'react';
import Toast from '../../../utils/Toast';
import ProfileAPI, { ProfileResponse, ProfileData } from '../../../api/api.topicpost.net/profile';
import { useHistory } from 'react-router-dom';

const SidebarLoggedIn: React.FC = () => {
  const [profileData, setProfileData] = useState<ProfileData | null>(null); //プロフィールデータを状態として保存
  const history = useHistory();

  useEffect(() => {
    const profile = new ProfileAPI();
    const toast = new Toast();
    profile.get()
      .then((response: ProfileResponse) => {
        // console.log("SidebarLoggedIn:", response);
        if (response.status !== 200) {
          if (response.status === 404) {
            return;
          }

          toast.error('送信に失敗しました');
          return;
        }
        setProfileData(response.data);
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

      {!profileData && ( //データがなければ表示する
        <div className="flex flex-col items-center justify-center hover:bg-gray-100 rounded-md p-3 mx-3 h-24">
          <span onClick={
            () => {
              history.push("/profile/edit");
            }
          }>
            <div className="flex bg-gray-200 w-12 h-12 mx-auto p-3 mb-3 rounded-full">
              <svg width="24" height="24" viewBox="0 0 1453 1254" fill="#577381" xmlns="http://www.w3.org/2000/svg">
                <rect y="329" width="472" height="93" rx="36" fill="" />
                <rect x="283" y="140" width="472" height="93" rx="46.5" transform="rotate(90 283 140)" fill="" />
                <ellipse cx="876.5" cy="258" rx="258.5" ry="258" fill="" />
                <path d="M1453 1036.82C1453 1251.56 1194.67 1254 876 1254C557.332 1254 299 1251.56 299 1036.82C299 822.079 557.332 648 876 648C1194.67 648 1453 822.079 1453 1036.82Z" fill="" />
              </svg>
            </div>
            <div className="flex justify-center text-sm text-slate-500">プロフィールが存在しません</div>
          </span>
        </div>
      )}
    </div>
  );
}

export default SidebarLoggedIn;
