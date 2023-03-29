import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TopPage from './apps/components/pages/TopPage';
import RecreationPage from './apps/components/pages/RecreationPage';
import DiaryPage from './apps/components/pages/DiaryPage';
import ContactPage from './apps/components/pages/ContactPage';
import NotFoundPage from './apps/components/pages/NotFoundPage';
import Pages, { PagesProps } from './apps/components/pages/Pages';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { BreadcrumbProps } from './core/components/molecules/Breadcrumb/Breadcrumb';

type RouteType = {
  path?: string;
  component: React.FC<PagesProps>;
  breadcrumb?: BreadcrumbProps[];
};

const routes: RouteType[] = [
  {
    path: "/",
    component: TopPage
  }, {
    path: "/recreation",
    component: RecreationPage,
    breadcrumb: [
      { href: '/recreation', context: 'レクリエーション' },
    ]
  }, {
    path: "/diary",
    component: DiaryPage,
    breadcrumb: [
      { href: '/diary', context: '活動日記' },
    ]
  }, {
    path: "/contact",
    component: ContactPage,
    breadcrumb: [
      { href: '/contact', context: 'お問い合わせ' },
    ]
  }, {
    path: "/example",
    component: Pages,
    breadcrumb: [
      { href: '/example', context: 'サンプル' },
    ]
  }, {
    component: NotFoundPage
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
              exact={index === 0}
              path={item.path}
              render={() => <item.component
                breadcrumbList={item.breadcrumb}
              />}
            />
          );
        })}
      </Switch>
    </BrowserRouter>
  </React.StrictMode>
);
