import { BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";

const SidebarFooter = () => {
  return (
    <footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200">
      <span className="flex text-sm text-gray-500 justify-center mb-3">
        Powered by chihiro.suzurikawa
      </span>
      <div className="flex mt-4 space-x-6 justify-center">
        <Link to="https://github.com/topics/topicpost" rel="noreferrer" target="_blank" className="text-gray-500 hover:text-gray-900">
          <BsGithub size={20} />
          <span className="sr-only">GitHub account</span>
        </Link>
      </div>
    </footer>
  );
}

export default SidebarFooter;
