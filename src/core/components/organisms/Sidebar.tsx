import SiteLogo from "../molecules/Sidebar/SidebarLogo";
import Login from "../molecules/Sidebar/SidebarLogin";
import SidebarContent from "../molecules/Sidebar/SidebarLabel";
import SidebarFooter from "../molecules/Sidebar/SidebarFooter";

const Sidebar = () => {
  return (
    <aside id="logo-sidebar" className="fixed top-0 left-0 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 shadow" aria-label="Sidebar">
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
      <SidebarFooter />
    </aside>
  );
}

export default Sidebar;
