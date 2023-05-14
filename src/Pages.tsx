import React from "react";
import SidebarPage from "./apps/components/pages/SidebarPage";
import Breadcrumb, { BreadcrumbProps } from "./core/components/molecules/Breadcrumb/Breadcrumb";
import { LoginModalProvider } from "./context/LoginModalContext";
import LoginModal from "./core/components/molecules/Modal/LoginModal";
import { ToastContainer } from "react-toastify";
import { CookiesProvider } from "react-cookie";
import { AuthContextProvider } from "./context/AuthContext";
import { WindowSize } from './core/components/debug/WindowSize';

export type PagesProps = {
  breadcrumb?: BreadcrumbProps[];
  template: React.FC<PagesProps>;
}

const Pages: React.FC<PagesProps> = ({ breadcrumb, template }) => {
  return (
    <CookiesProvider>
      <AuthContextProvider>
      <LoginModalProvider>
        <div className="container">
          <ToastContainer />
          <SidebarPage />
          <div className="p-4 md:ml-64">
            <Breadcrumb breadcrumb={breadcrumb} />
            {template({ template })}
            <WindowSize />
            <LoginModal />
          </div>
        </div>
      </LoginModalProvider>
      </AuthContextProvider>
    </CookiesProvider>
  );
};

export default Pages;
