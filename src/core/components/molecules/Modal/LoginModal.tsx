import React from "react";
import { AuthProviderButton, AuthProviderProps } from "./SocialLoginButton";
import { BsGithub, BsTwitter, BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

export interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (email: string, password: string) => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const AuthProviders: AuthProviderProps[] = [
    {
      // icon: BsGoogle,
      icon: <FcGoogle />,
      children: "Sign in with Google",
      link: "/auth/google",
    }, {
      icon: <BsGithub />,
      children: "Sign in with GitHub",
      link: "/auth/github",
    }, {
      icon: <BsTwitter />,
      children: "Sign in with Twitter",
      link: "/auth/twitter",
    }, {
      icon: <BsFacebook />,
      children: "Sign in with Facebook",
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
                  onClick={onClose}
                  type="button"
                  className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
                  <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                  <span className="sr-only">Close modal</span>
                </button>
                <div className="px-6 py-6">
                  <h3 className="mb-4 text-xl font-medium text-gray-900">Sign in to our platform</h3>
                  <div className="grid grid-cols-2">
                    {/* 左側にはSSOログインを設定する */}
                    <div className="flex flex-col items-center justify-center space-y-4 pr-6">
                      {AuthProviders.map((provider) => (
                        <AuthProviderButton {...provider} />
                      ))}
                    </div>
                    {/* 右側にはEmail/Passwordのログインを設定する */}
                    <div className="h-auto max-w-full border-l-2 pl-6">
                      <form className="space-y-6" action="#">
                        <div>
                          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                          <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@company.com" required />
                        </div>
                        <div>
                          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Your password</label>
                          <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                        </div>
                        <div className="flex justify-between">
                          <div className="flex items-start">
                            <div className="flex items-center h-5">
                              <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300" required />
                            </div>
                            <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900">Remember me</label>
                          </div>
                          <a href="/" className="text-sm text-blue-700 hover:underline">Lost Password?</a>
                        </div>
                        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Login to your account</button>
                        <div className="text-sm font-medium text-gray-500300">
                          Not registered? <a href="/" className="text-blue-700 hover:underline">Create account</a>
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
