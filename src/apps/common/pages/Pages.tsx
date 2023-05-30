import React from "react";
import SidebarMenu from "./SidebarPage";
import Breadcrumb, { BreadcrumbProps } from "../../../core/components/molecules/Breadcrumb/Breadcrumb";
import { LoginModalProvider } from "../../../context/LoginModalContext";
import LoginModal from "../../../core/components/molecules/Modal/LoginModal";
import { ToastContainer } from "react-toastify";
import { CookiesProvider } from "react-cookie";
import { AuthContextProvider } from "../../../context/AuthContext";
import { WindowSize } from '../../../core/components/debug/WindowSize';
import { Analytics } from '@vercel/analytics/react';
import { CompactMenu } from "../../menu/pages/CompactMenu";

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
            <ToastContainer />
            <SidebarMenu />
            <CompactMenu />
            <div className="p-4 lg:ml-64">
              <Breadcrumb breadcrumb={breadcrumb} />
              {template({ template })}
              {runEnv !== "production" && <WindowSize />}
              <LoginModal />
            </div>
          </LoginModalProvider>
        </AuthContextProvider>
      </CookiesProvider>
      <Analytics />
    </>
  );
};

export default Pages;
