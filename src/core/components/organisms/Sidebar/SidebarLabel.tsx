import React from "react";
import Twemoji from "../../atoms/Icon/Twemoji";
import { SidebarProps } from "../../../../apps/components/pages/sidebar";

const SidebarLabel: React.FC<SidebarProps> = ({ icon, label, link }) => {
  return (
    <ul className="">
      <a href={link}>
        <li className="flex p-3 h-17 border-b-2 hover:bg-gray-100 items-center">
          <div className="flex rounded-md w-10 h-10">
            <Twemoji>{icon}</Twemoji>
          </div>
          <span className="ml-4 text-lg text-gray-500 font-semibold">{label}</span>
        </li>
      </a>
    </ul>
  );
}

export default SidebarLabel;
