import SidebarPage from "./SidebarPage";

const NotFoundImage = `${process.env.PUBLIC_URL}/images/not_found_404.png`;

const NotFound: React.FC = () => {
  return (
    <div>
      <SidebarPage />
      <div className="sm:ml-64">
        <div className="flex mt-20 mb-6 justify-center">
          <img className="" src={NotFoundImage} alt="" />
        </div>
        <div className="flex mb-6 justify-center text-3xl font-semibold text-gray-500">
          Oops, this page doesn't seem to exist.
        </div>
        <div className="flex justify-center text-lg text-gray-500">
          <a href="/" className="hover:text-blue-500">Go to the top page.</a>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
