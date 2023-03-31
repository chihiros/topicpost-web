import React from "react";

const NotFoundImage = `${process.env.PUBLIC_URL}/images/not_found_404.png`;

const NotFound: React.FC = () => {
  return (
    <>
      <div className="flex mt-20 mb-6 justify-center">
        <img className="" src={NotFoundImage} alt="" />
      </div>
      <div className="flex mb-6 justify-center text-3xl font-semibold text-gray-500">
        Oops, this page doesn't seem to exist.
      </div>
      <div className="flex justify-center text-lg text-gray-500">
        <a href="/" className="hover:text-blue-500">Go to the top page.</a>
      </div>

      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
      >
        Open regular modal
      </button>
    </>
  );
}

export default NotFound;
