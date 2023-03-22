import SidebarMenu from "../molecules/SidebarMenu";

function Sidebar() {
  return (
    <aside id="logo-sidebar" className="fixed top-0 left-0 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
      <SidebarMenu />
    </aside>
  );
}

export default Sidebar;
