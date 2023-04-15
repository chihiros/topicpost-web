import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Text } from "../../atoms/Input";
import Label from '../../atoms/Label';
import axios from 'axios';

import { SubmitButton } from "../../atoms/Button";

import Toast from "../../../../utils/Toast";
import { getErrorMessage } from "../../../../utils/ErrorMessage";
import { supabaseClient } from "../../../../utils/supabase";
import { useHistory } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useAuthContext } from '../../../../context/AuthContext';

type EmailPasswordProps = {
  toggle: () => void;
};

export const EmailPassword: React.FC<EmailPasswordProps> = ({ toggle }) => {
  const [modalEmail, setModalEmail] = useState<string>(''); // value属性を型付きのstringで初期化する
  const [modalPassword, setModalPassword] = useState<string>(''); // value属性を型付きのstringで初期化する
  const [, setCookie] = useCookies();
  const { setLoggedIn } = useAuthContext();

  const toast = new Toast();

  const history = useHistory();

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setModalEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setModalPassword(event.target.value);
  };

  // TopicPost にログインするをクリックしたらaxiosを使ってログイン処理を行う
  const handleLoginWithPassword = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { data, error } = await supabaseClient.auth.signInWithPassword({
      email: modalEmail,
      password: modalPassword
    });

    if (error) {
      toast.error(getErrorMessage(error.message));
      return;
    }

    console.log(data);
    // ログインに成功したらモーダルを閉じる
    toggle();

    // const url = 'http://localhost:8686/v1/profile'
    const url = 'https://api.topicpost.net/v1/profile'
    const token = "Bearer " + data?.session?.access_token;

    axios.get(url, {
      headers: {
        'Authorization': token
      }
    })
    .then(response => {
      console.log(response.data);
      toast.success('ログインに成功しました');

      setCookie("access_token", data.session?.access_token);
      setCookie("refresh_token", data.session?.refresh_token);
      sessionStorage.setItem("last_access_date", new Date().toISOString());
      setLoggedIn(true);

      if (response.data.data.length) {
        // 登録済みのProfileがある場合
        history.push("/");
      } else {
        // Profileが登録されていない場合
        history.push(`/profile/edit`);
      }
    })
    .catch(error => {
      console.error(error);
      toast.error('ログインに失敗しました');
    });
  };

  return (
    <form className="space-y-6" onSubmit={handleLoginWithPassword}>
      <div>
        <Label htmlFor="modalEmail">メールアドレス</Label>
        <Text
          type="email"
          id="modalEmail"
          value={modalEmail}
          onChange={handleEmailChange}
          placeholder="example@topicpost.net"
          required={true}
        />
      </div>
      <div>
        <Label htmlFor="modalPassword">パスワード</Label>
        <Text
          type="password"
          id="modalPassword"
          value={modalPassword}
          onChange={handlePasswordChange}
          placeholder="••••••••"
          required={true}
        />
      </div>
      {/* <div className="flex justify-between">
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300" />
          </div>
          <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900">パスワードを記憶する</label>
        </div>
      </div> */}
      <div className="flex justify-end">
        <Link
          to="/forget"
          className="text-sm text-blue-700 hover:underline"
          onClick={toggle}
        >
          パスワードを忘れましたか？
        </Link>
      </div>
      <SubmitButton className="w-full">
        TopicPost にログイン
      </SubmitButton>
      <div className="text-sm font-medium text-gray-500">
        <Link
          to="/signup"
          className="text-blue-700 hover:underline"
          onClick={toggle}
        >
          TopicPostのアカウントを作成する
        </Link>
      </div>
    </form>
  );
};
