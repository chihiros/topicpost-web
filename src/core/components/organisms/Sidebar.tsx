import SidebarMenu from "../molecules/SidebarMenu";
import SidebarFooter from "../molecules/SidebarFooter";

function Sidebar() {
  return (
    <aside id="logo-sidebar" className="fixed top-0 left-0 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 shadow" aria-label="Sidebar">
      <SidebarMenu />
      <SidebarFooter />
    </aside>
  );
}

export default Sidebar;
