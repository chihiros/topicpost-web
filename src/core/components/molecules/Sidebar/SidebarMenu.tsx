import SiteLogo from "./SidebarLogo";
import Login from "../Login";
import SidebarContent from "./SidebarContent";

const Sidebar = () => {
  return (
    <div className="h-full py-4 overflow-y-auto bg-gray-50">
      <SiteLogo />
      <Login />

      <ul className="">
        <SidebarContent
          label="レクリエーション"
        />
        <SidebarContent
          label="活動日記"
        />
      </ul>
    </div>
  );
}

export default Sidebar;
