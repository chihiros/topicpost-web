import React from 'react';

const SidebarLoggedIn: React.FC = () => {
  return (
    <div>
      <div className="flex items-center justify-center hover:bg-gray-100 rounded-md p-3 mx-3 h-24">
        <img className="w-12 h-12 mr-auto rounded-full"
          src="https://ca.slack-edge.com/T02DB7DEGV8-U02L7F0LE56-b5f9688cbca2-512"
          alt=""
        />
        <div className="flex flex-col font-medium text-left">
          <div>chihiros</div>
          <div className="text-sm text-gray-500">Backend Engineer</div>
        </div>
      </div>
    </div>
  );
}

export default SidebarLoggedIn;
