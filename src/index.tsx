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
    path: "/recreation",
    component: RecreationPage
  }, {
    path: "/diary",
    component: DiaryPage
  }, {
    path: "/contact",
    component: ContactPage
  }
];

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={TopPage} />
        {routes.map((item) => {
          return <Route path={item.path} component={item.component} />
        })}
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>
);
