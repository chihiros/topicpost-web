import IconUserAdd from "../atoms/icons/UserAdd";

function Sidebar() {
  return (
    <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50">
      <div>
        <a href="#" className="flex justify-center pt-2 pb-4">
          <span className="text-3xl font-semibold hover:text-gray-400">TopicPost</span>
        </a>
      </div>
      <div className="hover:bg-gray-100 rounded-md p-3">
        <a href="#">
          <div className="flex bg-gray-200 w-12 h-12 mx-auto p-3 mb-3 rounded-full">
            <IconUserAdd />
          </div>
          <div className="flex justify-center text-sm text-slate-500">新規登録／ログイン</div>
        </a>
      </div>
      <div className="p-1 m-2">
        <a href="#" target="_self" rel="noopener noreferrer">
          <div className="flex justify-center text-xs text-slate-500">ログインすると？</div>
        </a>
      </div>

      <ul className="space-y-0">
        <li className="flex p-3 h-20 border-b-2 rounded-tl-lg hover:bg-slate-200">
          <a href="#" className="flex items-center text-gray-500">
            <div className="bg-zinc-200 rounded-md">
              <svg aria-hidden="true" className=" w-12 h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
            </div>
            <span className="ml-4 text-lg">レクリエーション</span>
          </a>
        </li>
        <li className="flex p-3 h-20 border-b-2 rounded-tl-lg hover:bg-slate-200">
          <a href="#" className="flex items-center text-gray-500">
            <div className="bg-zinc-200 rounded-md">
              <svg aria-hidden="true" className=" w-12 h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
            </div>
            <span className="ml-4 text-lg">レクリエーション</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
