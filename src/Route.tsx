import TopPage from './apps/components/templates/TopTemplate';
import RecreationPage from './apps/components/templates/RecreationTemplate';
import DiaryPage from './apps/components/templates/DiaryTemplate';
import ContactPage from './apps/components/templates/ContactTemplate';
import SignUpPage from './apps/components/templates/SignUpTemplate';
import NotFoundPage from './apps/components/pages/NotFoundPage';
import Pages, { PagesProps } from './apps/components/pages/Pages';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { BreadcrumbProps } from './core/components/molecules/Breadcrumb/Breadcrumb';

type RouteType = {
  path: string;
  template: React.FC<PagesProps>;
  breadcrumb?: BreadcrumbProps[];
};

const routes: RouteType[] = [
  {
    path: "/",
    template: TopPage
  }, {
    path: "/recreation",
    template: RecreationPage,
    breadcrumb: [
      { href: '/recreation', context: 'レクリエーション' },
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
              exact={index === 0}
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
