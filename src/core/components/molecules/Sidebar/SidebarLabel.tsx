import React from "react";
import Twemoji from "../../atoms/Icon/Twemoji";

type Props = {
  icon: string;
  label: string;
  link: string;
}

const SidebarLabel: React.FC<Props> = ({ icon, label, link }) => {
  return (
    <ul className="">
      <a href={link}>
        <li className="flex p-3 h-17 border-b-2 hover:bg-gray-100 items-center">
          <div className="flex rounded-md w-10 h-10">
            <Twemoji children={icon} />
          </div>
          <span className="ml-4 text-lg text-gray-500 font-semibold">{label}</span>
        </li>
      </a>
    </ul>
  );
}

export default SidebarLabel;
