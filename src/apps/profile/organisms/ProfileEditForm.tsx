import React, { useEffect, useState } from 'react';
import Label from '../../../core/components/atoms/Label';
import { Text } from '../../../core/components/atoms/Input';
import { SubmitButton } from '../../../core/components/atoms/Button';
import Toast from '../../../utils/Toast';
import { GetSession } from '../../../utils/supabase';
import ProfileAPI, { ProfileRequest, ProfileResponse } from '../../../api/api.topicpost.net/profile';

const ProfileEditForm: React.FC = () => {
  const [nicknameValue, setNicknameValue] = useState('');
  const [iconUrlValue, setIconUrlValue] = useState('');

  const clearForm = () => {
    setNicknameValue('');
  }

  const handleNicknameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNicknameValue(event.target.value);
  };

  const handleIconUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIconUrlValue(event.target.value);
  };

  useEffect(() => {
    const profile = new ProfileAPI();
    const toast = new Toast();
    profile.get()
      .then((response: ProfileResponse) => {
        console.log(response);
        if (response.status !== 200) {
          console.error(response);
          toast.error('送信に失敗しました');
          return;
        }

        if (response.data.length === 0) {
          toast.error('プロフィールが存在しません');
          return;
        }

        setNicknameValue(response.data[0].nickname);
        setIconUrlValue(response.data[0].icon_url);
      })
      .catch((error: any) => {
        console.error(error);
        toast.error('エラーが発生しました');
      });
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const profile = new ProfileAPI();
    event.preventDefault();
    const toast = new Toast();

    // ニックネームが空かの確認
    if (nicknameValue === '') {
      toast.error('ニックネームを入力してください');
      return;
    }

    GetSession().then(session => {
      const req: ProfileRequest = {
        nickname: nicknameValue,
        icon_url: iconUrlValue,
      }

      profile.put(req).then((response: ProfileResponse) => {
        console.log(response.data);
        toast.success('送信が完了しました');

        // フォームの初期化
        clearForm();
      }).catch((error: any) => {
        console.error(error);
        toast.error('送信に失敗しました');
      })
    })
  };

  return (
    <div className="p-4 bg-gray-50 rounded-lg">
      <div className="flex mb-5 text-3xl">プロフィールの編集</div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <Label htmlFor="nickname">
            ニックネーム
          </Label>
          <Text
            id="nickname"
            type="text"
            className="bg-gray-50"
            required={true}
            value={nicknameValue}
            onChange={handleNicknameChange}
          />
        </div>

        <input
          type="hidden"
          name="icon_url"
          value={iconUrlValue}
          onChange={handleIconUrlChange}
        />

        <SubmitButton>送信</SubmitButton>
      </form>
    </div>
  );
}

export default ProfileEditForm;
