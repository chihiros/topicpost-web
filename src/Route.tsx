import TopPage from './apps/common/TopTemplate';
// import TopPage from './apps/common';
import { RecreationTop, RecreationRegist, RecreationContent } from './apps/recreation/screens';
import DiaryPage from './apps/diary/templates/DiaryTemplate';
import ContactPage from './apps/contact/screens/ContactScreen';
import SignUpPage from './apps/signup/templates/SignUpTemplate';
import ProfileEditPage from './apps/profile/templates/ProfileEditTemplate';
import NotFoundPage from './apps/common/NotFound';
import Pages from './apps/common/Pages';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { BreadcrumbProps } from './core/components/molecules/Breadcrumb/Breadcrumb';
import { PrivacyPolicy } from './apps/common/PrivacyPolicyPage';
import SidebarMenu from './apps/sidebar/organisms/SidebarPage';
import { LoginModalProvider } from './context/LoginModalContext';
import { ToastContainer } from "react-toastify";
import { CookiesProvider } from "react-cookie";
import { AuthContextProvider } from "./context/AuthContext";
import { ProfileDataContextProvider } from './context/ProfileDataContext';
// import { Analytics } from '@vercel/analytics/react';
import { CompactMenu } from "./apps/menu/pages/CompactMenu";

type RouteType = {
  path: string;
  exact?: boolean;
  template: React.FC;
  breadcrumb?: BreadcrumbProps[];
};

const routes: RouteType[] = [
  {
    path: "/",
    exact: true,
    template: TopPage
  }, {
    path: "/recreation",
    exact: true,
    template: RecreationTop,
    breadcrumb: [
      { href: '/recreation', context: 'レクリエーション' },
    ]
  }, {
    path: "/recreation/register",
    template: RecreationRegist,
    breadcrumb: [
      { href: '/recreation', context: 'レクリエーション' },
      { href: '/recreation/register', context: '投稿' },
    ]
  }, {
    path: "/recreation/:id",
    template: RecreationContent,
    breadcrumb: [
      { href: '/recreation', context: 'レクリエーション' },
      { href: '/recreation/:id', context: '現在地' },
    ]
  }, {
    path: "/diary",
    template: DiaryPage,
    breadcrumb: [
      { href: '/diary', context: '活動日記' },
    ]
  }, {
    path: "/contact",
    template: ContactPage,
    breadcrumb: [
      { href: '/contact', context: 'お問い合わせ' },
    ]
  }, {
    path: "/signup",
    template: SignUpPage,
    breadcrumb: [
      { href: '/signup', context: 'アカウント新規登録' },
    ]
  }, {
    path: "/forget",
    template: SignUpPage,
    breadcrumb: [
      { href: '/forget', context: 'パスワード再設定' },
    ]
  }, {
    path: "/profile/edit",
    template: ProfileEditPage,
    breadcrumb: [
      { href: '/profile/edit', context: 'プロフィール編集' },
    ]
  }, {
    path: "/privacypolicy",
    template: PrivacyPolicy,
    breadcrumb: [
      { href: '/privacypolicy', context: 'プライバシーポリシー' },
    ]
  }
];

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <CookiesProvider>
        <ProfileDataContextProvider>
          <AuthContextProvider>
            <LoginModalProvider>
              <ToastContainer />
              <SidebarMenu />
              <CompactMenu />
              <Switch>
                {routes.map((item, index) => {
                  return (
                    <Route
                      key={index}
                      exact={item.exact}
                      path={item.path}
                      render={() => <Pages
                        breadcrumb={item.breadcrumb}
                        template={<item.template />}
                      />}
                    />
                  );
                })}
                <Route render={() => <Pages
                  breadcrumb={[{ href: '', context: '404 Not Found' }]}
                  template={<NotFoundPage />}
                />} />
              </Switch>
              {/* <Analytics /> */}
            </LoginModalProvider>
          </AuthContextProvider>
        </ProfileDataContextProvider>
      </CookiesProvider>
    </BrowserRouter>
  );
}

export default Routes;
