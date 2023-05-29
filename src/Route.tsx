import TopPage from './apps/common/templates/TopTemplate';
import RecreationPage from './apps/recreation/templates/RecreationTemplate';
import { RecreationRegistPage } from './apps/recreation/pages/RecreationRegistPage';
import DiaryPage from './apps/diary/templates/DiaryTemplate';
import ContactPage from './apps/contact/templates/ContactTemplate';
import SignUpPage from './apps/signup/templates/SignUpTemplate';
import ProfileEditPage from './apps/profile/templates/ProfileEditTemplate';
import NotFoundPage from './apps/common/pages/NotFoundPage';
import Pages, { PagesProps } from './apps/common/pages/Pages';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { BreadcrumbProps } from './core/components/molecules/Breadcrumb/Breadcrumb';
import { PrivacyPolicy } from './apps/common/pages/PrivacyPolicyPage';

type RouteType = {
  path: string;
  exact?: boolean;
  template: React.FC<PagesProps>;
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
    template: RecreationPage,
    breadcrumb: [
      { href: '/recreation', context: 'レクリエーション' },
    ]
  }, {
    path: "/recreation/register",
    template: RecreationRegistPage,
    breadcrumb: [
      { href: '/recreation', context: 'レクリエーション' },
      { href: '/recreation/register', context: '投稿' },
    ]
  },{
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
      <Switch>
        {routes.map((item, index) => {
          return (
            <Route
              key={index}
              exact={item.exact}
              path={item.path}
              render={() => <Pages
                breadcrumb={item.breadcrumb}
                template={item.template}
              />}
            />
          );
        })}
        <Route render={() => <Pages
          breadcrumb={[{ href: '', context: '404 Not Found' }]}
          template={NotFoundPage}
        />} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
