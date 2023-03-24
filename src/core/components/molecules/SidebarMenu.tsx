import SiteLogo from "../atoms/SidebarLogo";
import Login from "../molecules/Login";
import SidebarContent from "../atoms/SidebarContent";

function Sidebar() {
  return (
    <div className="h-full py-4 overflow-y-auto bg-gray-50">
      <SiteLogo />
      <Login />

      <ul className="space-y-0">
        <SidebarContent />
      </ul>
    </div>
  );
}

export default Sidebar;
