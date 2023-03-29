import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TopPage from './apps/components/templates/TopTemplate';
import RecreationPage from './apps/components/templates/RecreationTemplate';
import DiaryPage from './apps/components/templates/DiaryTemplate';
import ContactPage from './apps/components/templates/ContactTemplate';
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
    path: "/example",
    template: Pages,
    breadcrumb: [
      { href: '/example', context: 'サンプル' },
    ]
  }
];

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
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
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>
);
