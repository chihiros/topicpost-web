import React from 'react';
import { Link } from "react-router-dom";
import { Text } from "../../atoms/Input";
import { SubmitButton } from "../../atoms/Button";

type EmailPasswordProps = {
  email: string;
  password: string;
  onChangeEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  toggle: () => void;
  onClick: () => void;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
};

export const EmailPassword: React.FC<EmailPasswordProps> = ({ email, password, onChangeEmail, onChangePassword, toggle, onClick, onSubmit }) => {
  return (
    <form className="space-y-6" action="#">
      <div>
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">メールアドレス</label>
        <Text
          type="email"
          id="email"
          value={email}
          onChange={onChangeEmail}
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
          onChange={onChangePassword}
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
        onClick={onClick}
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
