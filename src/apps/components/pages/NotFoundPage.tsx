import React, { useContext } from "react";
import { Link } from "react-router-dom";
import LoginModal from "../../../core/components/molecules/Modal/LoginModal";
import LoginModalContext from "../../../context/LoginModalContext";

const NotFoundImage = `${process.env.PUBLIC_URL}/images/not_found_404.png`;

const NotFound: React.FC = () => {
  const { toggle } = useContext(LoginModalContext);

  return (
    <>
      <div className="flex mt-20 mb-6 justify-center">
        <img className="" src={NotFoundImage} alt="" />
      </div>
      <div className="flex mb-6 justify-center text-3xl font-semibold text-gray-500">
        Oops, this page doesn't seem to exist.
      </div>
      <div className="flex justify-center text-lg text-gray-500">
        <Link to="/" className="hover:text-blue-500">Go to the top page.</Link>
      </div>

      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => toggle()}
      >
        Open regular modal
      </button>

      <LoginModal />
    </>
  );
}

export default NotFound;
