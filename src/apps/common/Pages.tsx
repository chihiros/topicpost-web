import React from "react";
import Breadcrumb, { BreadcrumbProps } from "../../core/components/molecules/Breadcrumb/Breadcrumb";
import LoginModal from "../../core/components/molecules/Modal/LoginModal";
import { WindowSize } from '../../core/components/debug/WindowSize';

export type PagesProps = {
  breadcrumb?: BreadcrumbProps[];
  template: React.ReactNode;
}

const Pages: React.FC<PagesProps> = ({ breadcrumb, template }) => {
  const runEnv = process.env.REACT_APP_ENV;

  return (
    <div className="p-4 lg:ml-64">
      <Breadcrumb breadcrumb={breadcrumb} />
      {template}
      {runEnv !== "production" && <WindowSize />}
      <LoginModal />
    </div>
  );
};

export default Pages;
