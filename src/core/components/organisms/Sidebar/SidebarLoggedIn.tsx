import React from 'react';

const SidebarLoggedIn: React.FC = () => {
  return (
    <>
      <div
        className="grid-cols-4 items-center justify-center hover:bg-gray-100 rounded-md p-3 mx-3 h-26 py-3"
      >
        <img className=" w-12 h-12 mx-auto mb-3 rounded-full"
          src="https://ca.slack-edge.com/T02DB7DEGV8-U02L7F0LE56-b5f9688cbca2-512"
          alt=""
        />
        <div className="text-sm text-slate-500">chihiros</div>
      </div>
    </>
  );
}

export default SidebarLoggedIn;
