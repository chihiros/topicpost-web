import React from "react";
import SidebarPage from "./SidebarPage";
import Breadcrumb, { BreadcrumbProps } from "../../../core/components/molecules/Breadcrumb/Breadcrumb";

export type PagesProps = {
  breadcrumb?: BreadcrumbProps[];
  component?: React.ReactNode;
}

const Pages: React.FC<PagesProps> = ({ breadcrumb }) => {
  return (
    <div>
      <SidebarPage />
      <div className="p-4 sm:ml-64">
        <Breadcrumb
          breadcrumb={breadcrumb}
        />
      </div>
    </div>
  );
};

export default Pages;
