function Login() {
  return (
    <div>
      <div className="hover:bg-gray-100 rounded-md p-3 mx-3">
        <a href="#">
          <div className="flex bg-gray-200 w-12 h-12 mx-auto p-3 mb-3 rounded-full">
            <svg width="24" height="24" viewBox="0 0 1453 1254" fill="#577381" xmlns="http://www.w3.org/2000/svg">
              <rect y="329" width="472" height="93" rx="36" fill="" />
              <rect x="283" y="140" width="472" height="93" rx="46.5" transform="rotate(90 283 140)" fill="" />
              <ellipse cx="876.5" cy="258" rx="258.5" ry="258" fill="" />
              <path d="M1453 1036.82C1453 1251.56 1194.67 1254 876 1254C557.332 1254 299 1251.56 299 1036.82C299 822.079 557.332 648 876 648C1194.67 648 1453 822.079 1453 1036.82Z" fill="" />
            </svg>
          </div>
          <div className="flex justify-center text-sm text-slate-500">新規登録／ログイン</div>
        </a>
      </div>
      <div className="p-1 m-2">
        <a href="#" target="_self" rel="noopener noreferrer">
          <div className="flex justify-center text-xs text-slate-500">ログインすると？</div>
        </a>
      </div>
    </div>
  );
}

export default Login;
