import React from "react";
import SidebarPage from "./SidebarPage";
import Breadcrumb, { BreadcrumbProps } from "../../../core/components/molecules/Breadcrumb/Breadcrumb";
import { LoginModalProvider } from "../../../context/LoginModalContext";
import LoginModal from "../../../core/components/molecules/Modal/LoginModal";
import { ToastContainer } from "react-toastify";
import { CookiesProvider } from "react-cookie";
import { AuthContextProvider } from "../../../context/AuthContext";
import { WindowSize } from '../../../core/components/debug/WindowSize';
import { Analytics } from '@vercel/analytics/react';

export type PagesProps = {
  breadcrumb?: BreadcrumbProps[];
  template: React.FC<PagesProps>;
}

const Pages: React.FC<PagesProps> = ({ breadcrumb, template }) => {
  const runEnv = process.env.REACT_APP_ENV;

  return (
    <>
      <CookiesProvider>
        <AuthContextProvider>
          <LoginModalProvider>
            <div className="">
              <ToastContainer />
              <SidebarPage />
              <div className="p-4 lg:ml-64">
                <Breadcrumb breadcrumb={breadcrumb} />
                {template({ template })}
                {runEnv !== "production" && <WindowSize />}
                <LoginModal />
              </div>
            </div>
          </LoginModalProvider>
        </AuthContextProvider>
      </CookiesProvider>
      <Analytics />
    </>
  );
};

export default Pages;
