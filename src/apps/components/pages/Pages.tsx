import React from "react";
import SidebarPage from "./SidebarPage";
import Breadcrumb, { BreadcrumbProps } from "../../../core/components/molecules/Breadcrumb/Breadcrumb";

interface PagesProps {
  breadcrumb: BreadcrumbProps;
}

const Pages: React.FC<PagesProps> = ({ breadcrumb }) => {
  return (
    <div>
      <SidebarPage />
      <div className="p-4 sm:ml-64">
        <Breadcrumb
          breadcrumb={[
            { href: breadcrumb.href, context: breadcrumb.context },
          ]}
        />
        {/* <>コンポーネント</> */}
      </div>
    </div>
  );
};

export default Pages;
