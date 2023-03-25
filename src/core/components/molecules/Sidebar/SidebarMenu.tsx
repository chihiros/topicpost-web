import SiteLogo from "../../atoms/SidebarLogo";
import Login from "../Login";
import SidebarContent from "../../atoms/SidebarContent";

const Sidebar = () => {
  return (
    <div className="h-full py-4 overflow-y-auto bg-gray-50">
      <SiteLogo />
      <Login />

      <ul className="">
        <SidebarContent
          title="レクリエーション"
        />
        <SidebarContent
          title="活動日記"
        />
      </ul>
    </div>
  );
}

export default Sidebar;
