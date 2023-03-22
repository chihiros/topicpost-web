function SiteContent() {
  return (
    <li className="flex p-3 h-20 border-b-2 hover:bg-gray-100">
      <a href="#" className="flex items-center text-gray-500">
        <div className="bg-zinc-200 rounded-md">
          <svg aria-hidden="true" className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
        </div>
        <span className="ml-4 text-lg">レクリエーション</span>
      </a>
    </li>
  );
}

export default SiteContent;
