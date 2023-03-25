import SidebarLogin from "../molecules/Sidebar/SidebarLogin";
import SidebarContent from "../molecules/Sidebar/SidebarLabel";
import SidebarFooter from "../molecules/Sidebar/SidebarFooter";

const Sidebar = () => {
  return (
    <aside id="logo-sidebar" className="fixed top-0 left-0 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 shadow" aria-label="Sidebar">
      <div className="h-full py-4 overflow-y-auto bg-gray-50">
        <a href="#" className="flex justify-center pt-2 pb-4">
          <span className="text-3xl font-semibold hover:text-gray-400">TopicPost</span>
        </a>
        <SidebarLogin />
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
