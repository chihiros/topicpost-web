import React, { useState } from 'react';
import axios from 'axios';
import Label from '../../atoms/Label';
import { Text, Annotation } from '../../atoms/Input';
import { SubmitButton } from '../../atoms/Button';
import Toast from '../../../../utils/Toast';
import { supabaseClient } from '../../../../utils/supabase';

const ContactForm: React.FC = () => {
  const [nicknameValue, setNicknameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [emailConfirm, setEmailConfirm] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const clearForm = () => {
    setNicknameValue('');
    setEmailValue('');
    setEmailConfirm('');
    setPasswordValue('');
  }

  const handleNicknameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNicknameValue(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailValue(event.target.value);
  };

  const handleEmailConfirmChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailConfirm(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    console.log('submit');
    event.preventDefault();

    const toast = new Toast();
    // const url = 'https://api.topicpost.net/v1/contact';

    // ニックネームが空かの確認
    if (nicknameValue === '') {
      toast.error('ニックネームを入力してください');
      return;
    }

    // メールアドレスが一致しているかの確認
    if (emailValue !== emailConfirm) {
      toast.error('メールアドレスが一致しません');
      return;
    }

    // パスワードが8文字以上64文字以下かの確認
    if (passwordValue.length < 8 || passwordValue.length > 64) {
      toast.error('パスワードは8文字以上64文字以下で入力してください');
      return;
    }

    // パスワードに半角英数字, 記号以外の文字が含まれていないかの確認
    const regex = /^[a-zA-Z0-9!-/:-@¥[-`{-~]+$/;
    if (!regex.test(passwordValue)) {
      toast.error('パスワードに利用できるのは半角英数字と記号のみです');
      return;
    }

    const { data, error } = await supabaseClient.auth.signUp({
      email: emailValue,
      password: passwordValue,
    });


    if (error) {
      console.log(error.message);
      toast.error(error.message);
      return;
    }
    console.log(data);
    console.log(data?.user);
    console.log(data?.user?.id);



    // axios.post(url, data)
    //   .then(response => {
    //     console.log(response.data);
    //     toast.success('送信が完了しました');

    //     // フォームの初期化
    //     clearForm();
    //   })
    //   .catch(error => {
    //     console.error(error);
    //     toast.error('送信に失敗しました');
    //   });

    toast.success("問題なし")
  };

  return (
    <div className="p-4 bg-gray-50 rounded-lg">
      <div className="flex mb-5 text-3xl">新規アカウントの登録</div>
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


        <div className="grid grid-cols-12 gap-4 mb-4">
          <div className="col-span-6">
            <Label htmlFor="email">
              メールアドレス<sup className='text-red-600'>*必須</sup>
            </Label>
            <Text
              id="email"
              type="email"
              className="bg-gray-50"
              required={true}
              value={emailValue}
              onChange={handleEmailChange}
            />
          </div>
          <div className="col-span-6">
            <Label htmlFor="emailConfirm">
              メールアドレス(確認用)<sup className='text-red-600'>*必須</sup>
            </Label>
            <Text
              id="emailConfirm"
              type="email"
              className="bg-gray-50"
              required={true}
              value={emailConfirm}
              onChange={handleEmailConfirmChange}
            />
          </div>
        </div>
        <div className="mb-4">
          <Label htmlFor="password">
            パスワード<sup className='text-red-600'>*必須</sup>
          </Label>
          <Text
            id="password"
            type="password"
            className="bg-gray-50"
            placeholder=""
            required={true}
            value={passwordValue}
            onChange={handlePasswordChange}
          />
          <Annotation>パスワードは8文字以上64文字以下で入力してください</Annotation>
        </div>
        <button type="submit">送信</button>
      </form>
    </div>
  );
}

export default ContactForm;
