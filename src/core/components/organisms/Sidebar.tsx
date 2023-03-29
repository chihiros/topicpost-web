import SidebarLogin from "../molecules/Sidebar/SidebarLogin";
import SidebarLabel from "../molecules/Sidebar/SidebarLabel";
import SidebarFooter from "../molecules/Sidebar/SidebarFooter";

// const labels = [
//   {
//     icon: "🔔",
//     label: "お知らせ",
//     link: "/news"
//   }, {
//     icon: "🏠",
//     label: "レクリエーション",
//     link: "/recreation"
//   }, {
//     icon: "📚",
//     label: "活動日記",
//     link: "/diary"
//   }, {
//     icon: "📝",
//     label: "お問い合わせ",
//     link: "/contact"
//   }
// ];

type Label = {
  icon: string;
  label: string;
  link: string;
}

const Sidebar: React.FC<{ labels: Label[] }> = ({ labels }) => {
  return (
    <aside id="logo-sidebar" className="fixed top-0 left-0 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 shadow" aria-label="Sidebar">
      <div className="h-full py-4 overflow-y-auto bg-gray-50">
        <a href="/" className="flex justify-center pt-2 pb-4">
          <span className="text-3xl font-semibold hover:text-gray-400">TopicPost</span>
        </a>
        <SidebarLogin />
        {labels.map((label, index) => (
          <SidebarLabel
            key={index}
            icon={label.icon}
            label={label.label}
            link={label.link}
          />
        ))}
      </div>
      <SidebarFooter />
    </aside>
  );
}

export default Sidebar;
