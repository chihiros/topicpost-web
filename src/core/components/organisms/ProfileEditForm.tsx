import React, { useState } from 'react';
import axios from 'axios';
import Label from '../atoms/Label';
import { Text, Textarea } from '../atoms/Input';
import { SubmitButton } from '../atoms/Button';
import Toast from '../../../utils/Toast';

const ProfileEditForm: React.FC = () => {
  const [nicknameValue, setNicknameValue] = useState('');

  const clearForm = () => {
    setNicknameValue('');
  }

  const handleNicknameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNicknameValue(event.target.value);
  };


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const toast = new Toast();

    // // ニックネームが空かの確認
    // if (nicknameValue === '') {
    //   toast.error('ニックネームを入力してください');
    //   return;
    // }


    const url = 'https://api.topicpost.net/v1/contact';
    const data = {
      // name: nameValue,
      // email: emailValue,
      // content: messageValue,
    };

    axios.post(url, data)
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
  };

  return (
    <div className="p-4 bg-gray-50 rounded-lg">
      <div className="flex mb-5 text-3xl">お問い合わせ</div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <Label htmlFor="name">
            ニックネーム<sup className='text-red-600'>*必須</sup>
          </Label>
          <Text
            id="name"
            type="text"
            className="bg-gray-50"
            required={true}
            value={nicknameValue}
            onChange={handleNicknameChange}
          />
        </div>
        <SubmitButton>送信</SubmitButton>
      </form>
    </div>
  );
}

export default ProfileEditForm;
