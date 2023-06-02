import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Label from '../../../core/components/atoms/Label';
import { Text } from '../../../core/components/atoms/Input';
import { SubmitButton } from '../../../core/components/atoms/Button';
import Toast from '../../../utils/Toast';
import { GetSession } from '../../../utils/supabase';
import ProfileAPI from '../../../api/api.topicpost.net/profile';

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
      .then((response: any) => {
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
    event.preventDefault();
    const toast = new Toast();

    // ニックネームが空かの確認
    if (nicknameValue === '') {
      toast.error('ニックネームを入力してください');
      return;
    }

    GetSession().then(session => {
      const url = 'https://api.topicpost.net/v1/profile';
      const token = "Bearer " + session?.access_token
      const data = {
        nickname: nicknameValue,
        icon_url: iconUrlValue,
      };

      axios.put(url, data, {
        headers: {
          'Authorization': token
        }
      })
        .then(response => {
          console.log(response.data);
          toast.success('送信が完了しました');

          // フォームの初期化
          clearForm();
        })
        .catch(error => {
          console.error(error);
          toast.error('送信に失敗しました');
        });
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

        {/* <Label htmlFor="profile-icon">アイコン</Label>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div
            className="items-center justify-center w-full"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
          >
            <label
              htmlFor="dropzone-file"
              className={`flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 ${dragOver ? 'bg-opacity-50' : ''
                }`}
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  aria-hidden="true"
                  className="w-10 h-10 mb-3 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  ></path>
                </svg>
                <p className="mb-2 text-sm text-gray-500">
                  <span className="font-semibold">Click to upload</span> or drag and drop
                </p>
                <p className="text-xs text-gray-500">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input id="dropzone-file" type="file" accept="image/*" hidden onChange={handleInputChange} />
            </label>
          </div>
          <div className="relative h-64 square border-2 border-gray-300 border-dashed rounded-lg">
            {image && (
              <img
                src={image}
                alt="プレビュー画像"
                className="object-contain w-full h-full max-w-full max-h-full"
                style={{ objectFit: 'cover', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
              />
            )}
          </div>
        </div> */}

        <SubmitButton>送信</SubmitButton>
      </form>
    </div>
  );
}

export default ProfileEditForm;
