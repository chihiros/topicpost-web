import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TopPage from './apps/components/pages/TopPage';
import RecreationPage from './apps/components/pages/RecreationPage';
import DiaryPage from './apps/components/pages/DiaryPage';
import ContactPage from './apps/components/pages/ContactPage';
import NotFoundPage from './apps/components/pages/NotFoundPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={TopPage} />
        <Route path="/recreation" component={RecreationPage} />
        <Route path="/diary" component={DiaryPage} />
        <Route path="/contact" component={ContactPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>
);
