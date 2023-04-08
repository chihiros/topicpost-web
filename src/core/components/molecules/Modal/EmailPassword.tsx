import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Text } from "../../atoms/Input";
import { SubmitButton } from "../../atoms/Button";

import Toast from "../../../../utils/Toast";
import { getErrorMessage } from "../../../../utils/ErrorMessage";
import { supabaseClient } from "../../../../utils/supabase";
import { useHistory } from 'react-router-dom';
import { useCookies } from 'react-cookie';

type EmailPasswordProps = {
  toggle: () => void;
};

export const EmailPassword: React.FC<EmailPasswordProps> = ({ toggle }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [, setCookie] = useCookies();

  const toast = new Toast();
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const history = useHistory();
  // TopicPost にログインするをクリックしたらaxiosを使ってログイン処理を行う
  const handleLoginWithPasswordClick: () => void = async () => {
    const emailValue = email;
    const passwordValue = password;
    const { data, error } = await supabaseClient.auth.signInWithPassword({
      email: emailValue,
      password: passwordValue,
    });

    if (error) {
      toast.error(getErrorMessage(error.message));
      return;
    }
    setCookie("access_token", data.session?.access_token);
    setCookie("refresh_token", data.session?.refresh_token);
    sessionStorage.setItem("last_access_date", new Date().toISOString());

    // ログインに成功したらモーダルを閉じる
    toggle();

    // ログインに成功したらトップページに遷移する
    history.push("/");
  };

  return (
    <form className="space-y-6" action="#">
      <div>
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">メールアドレス</label>
        <Text
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="example@topicpost.net"
          required={true}
        />
      </div>
      <div>
        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">パスワード</label>
        <Text
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="••••••••"
          required={true}
        />
      </div>
      <div className="flex justify-between">
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300" />
          </div>
          <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900">パスワードを記憶する</label>
        </div>
      </div>
      <div className="flex justify-end">
        <Link
          to="/forget"
          className="text-sm text-blue-700 hover:underline"
          onClick={toggle}
        >
          パスワードを忘れましたか？
        </Link>
      </div>
      <SubmitButton
        className="w-full"
        onClick={handleLoginWithPasswordClick}
      >
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
