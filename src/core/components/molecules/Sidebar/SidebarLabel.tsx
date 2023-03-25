import React from "react";
import Twemoji from "../../atoms/Icon/Twemoji";

type Props = {
    icon: string;
  　label: string;
    link: string;
}

const SidebarContent: React.FC<Props> = ({ icon, label, link }) => {
  return (
    <li className="flex p-3 h-17 border-b-2 hover:bg-gray-100">
      <a href={link} className="flex items-center text-gray-500">
        <div className="flex rounded-md w-10 h-10 items-center justify-center">
          <Twemoji children={icon} />
        </div>
        <span className="ml-4 text-lg font-semibold">{label}</span>
      </a>
    </li>
  );
}

export default SidebarContent;
