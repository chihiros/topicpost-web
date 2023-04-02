import React from "react";
import SidebarPage from "./SidebarPage";
import Breadcrumb, { BreadcrumbProps } from "../../../core/components/molecules/Breadcrumb/Breadcrumb";
import { LoginModalProvider } from "../../../context/LoginModalContext";
import LoginModal from "../../../core/components/molecules/Modal/LoginModal";
import { ToastContainer } from "react-toastify";

export type PagesProps = {
  breadcrumb?: BreadcrumbProps[];
  template: React.FC<PagesProps>;
}

const Pages: React.FC<PagesProps> = ({ breadcrumb, template }) => {
  return (
    <LoginModalProvider>
      <div>
        <ToastContainer />
        <SidebarPage />
        <div className="p-4 sm:ml-64">
          <Breadcrumb breadcrumb={breadcrumb} />
          {template({ template })}
          <LoginModal />
        </div>
      </div>
    </LoginModalProvider>
  );
};

export default Pages;
