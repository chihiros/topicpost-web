import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TopPage from './apps/components/pages/TopPage';
import RecreationPage from './apps/components/pages/RecreationPage';
import DiaryPage from './apps/components/pages/DiaryPage';
import ContactPage from './apps/components/pages/ContactPage';
import NotFoundPage from './apps/components/pages/NotFoundPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const routes = [
  {
    path: "/",
    component: TopPage
  }, {
    path: "/recreation",
    component: RecreationPage
  }, {
    path: "/diary",
    component: DiaryPage
  }, {
    path: "/contact",
    component: ContactPage
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
          return <Route exact={index === 0} path={item.path} component={item.component} />
        })}
      </Switch>
    </BrowserRouter>
  </React.StrictMode>
);
