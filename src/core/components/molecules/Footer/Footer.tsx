import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200">
      <span className="flex text-sm text-gray-500 justify-center mb-3">
        <a href="https://github.com/chihiros" rel="noreferrer" target="_blank">Powered by chihiro.suzurikawa</a>
      </span>
      <div className="flex mt-4 space-x-6 justify-center">
        <a href="https://github.com/topics/topicpost" rel="noreferrer" target="_blank" className="text-gray-500 hover:text-gray-900">
          <BsGithub size={20} />
          <span className="sr-only">GitHub account</span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
