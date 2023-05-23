import React from "react";
import { Link } from "react-router-dom";
import Twemoji from 'react-twemoji';

export type SidebarProps = {
  icon: string;
  label: string;
  link: string;
};

const SidebarLabel: React.FC<SidebarProps> = ({ icon, label, link }) => {
  return (
    <ul className="">
      <Link to={link}>
        <li className="flex p-3 h-17 border-b-2 hover:bg-gray-100 items-center">
          <div className="flex rounded-md w-10 h-10">
            <Twemoji>{icon}</Twemoji>
          </div>
          <span className="ml-4 text-lg text-gray-500 font-semibold">{label}</span>
        </li>
      </Link>
    </ul>
  );
}

export default SidebarLabel;
