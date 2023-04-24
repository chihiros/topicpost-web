import React, { useEffect } from 'react';
import Toast from '../../../../utils/Toast';
import { Profile } from '../../../../api/api.topicpost.net/profile';


const SidebarLoggedIn: React.FC = () => {
  const [nickname, setNickname] = React.useState<string>('');
  const [iconUrl, setIconUrl] = React.useState<string>('');

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
      <div className="flex items-center justify-center hover:bg-gray-100 rounded-md p-3 mx-3 h-24">
        <img className="w-12 h-12 rounded-full mr-5"
          src={iconUrl}
          alt=""
        />
        <div className="flex flex-col font-medium text-left">
          <div>{nickname}</div>
          <div className="text-sm text-gray-500">Backend Engineer</div>
        </div>
      </div>
    </div>
  );
}

export default SidebarLoggedIn;
