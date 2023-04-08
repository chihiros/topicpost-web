import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';

const Card: React.FC = () => {
  return (
    <div className="flex-shrink-0 w-64 bg-white rounded-lg">
        <Link to="/recreation">
          <img className="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
        </Link>
        <div className="p-5">
          <Link to="/recreation">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Noteworthy</h5>
          </Link>
          <p className="mb-3 text-base text-gray-700">Here are the biggest enterprise technology acquisitions of 2021.</p>
          <Link to="/recreation" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
            Read more
            <BsArrowRight size={20} className='ml-2' />
          </Link>
        </div>
      </div>
  );
};

export default Card;
