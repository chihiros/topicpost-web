import React, { useState } from "react";
import { useLoginModal } from "../../../../context/LoginModalContext";
import { Link } from "react-router-dom";
import { SocialLoginButton, SocialLoginProps } from "./SocialLoginButton";
import { BsGithub, BsTwitter, BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { RxCross2 } from "react-icons/rx";
import { SupabaseSignUp, SupabaseSignInWithPassword } from "../../../../utils/supabase";

const LoginModal: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isOpen, toggle } = useLoginModal();

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      toggle();
    }
  };

  // TopicPost にログインするをクリックしたらaxiosを使ってログイン処理を行う
  const handleSignInWithPasswordClick = () => {
    console.log("ログイン処理を行う");
    // メールアドレスの値を取得する
    const emailValue = email;
    // パスワードの値を取得する
    const passwordValue = password;

    console.log("email", emailValue);
    console.log("password", passwordValue);

    // メールアドレスとパスワードを使ってログインする
    SupabaseSignInWithPassword(emailValue, passwordValue);

    // // ログインに成功したらモーダルを閉じる
    // toggle();

    // // ログインに成功したらトップページに遷移する
    // window.location.href = "/";
  };

  const SocialLogins: SocialLoginProps[] = [
    {
      icon: <FcGoogle
        size={24}
      />,
      children: "Googleでログイン",
      link: "/auth/google",
    }, {
      icon: <BsGithub
        size={20}
        color="#333"
      />,
      children: "GitHubでログイン",
      link: "/auth/github",
    }, {
      icon: <BsTwitter
        size={20}
        color="#1DA1F2"
      />,
      children: "Twitterでログイン",
      link: "/auth/twitter",
    }, {
      icon: <BsFacebook
        size={20}
        color="#4267B2"
      />,
      children: "Facebookでログイン",
      link: "/auth/facebook",
    }
  ];

  return (
    <>
      {isOpen && (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            onClick={handleOverlayClick}
          >
            <div className="relative w-full h-full max-w-2xl md:h-auto">
              {/* <!-- Modal content --> */}
              <div className="relative bg-white rounded-lg shadow">
                <button
                  onClick={toggle}
                  type="button"
                  className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
                  <RxCross2 size={20} />
                  <span className="sr-only">Close modal</span>
                </button>
                <div className="px-6 py-6">
                  <h3 className="mb-4 text-xl font-medium text-gray-900">TopicPost にログインする</h3>
                  <div className="grid grid-cols-2">
                    {/* 左側にはSSOログインを設定する */}
                    <div className="flex flex-col justify-center space-y-4 pr-6">
                      {SocialLogins.map((social, index) => (
                        <SocialLoginButton key={index} {...social} />
                      ))}
                    </div>
                    {/* 右側にはEmail/Passwordのログインを設定する */}
                    <div className="h-auto max-w-full border-l-2 pl-6">
                      <form className="space-y-6" action="#">
                        <div>
                          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">メールアドレス</label>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            value={email}
                            onChange={handleEmailChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="example@topicpost.net"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">パスワード</label>
                          <input
                            type="password"
                            name="password"
                            id="password"
                            value={password}
                            onChange={handlePasswordChange}
                            placeholder="••••••••"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required
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
                          <a href="/" className="text-sm text-blue-700 hover:underline">パスワードを忘れましたか？</a>
                        </div>
                        <div
                          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                          onClick={handleSignInWithPasswordClick}
                        >
                          TopicPost にログイン
                        </div>
                        <div className="text-sm font-medium text-gray-500300">
                          <Link to="/signup" className="text-blue-700 hover:underline">TopicPostのアカウントを作成する</Link>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </>
  );
};

export default LoginModal;
