import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Top from './apps/components/pages/TopPage';
import Recreation from './apps/components/pages/RecreationPage';
import Diary from './apps/components/pages/DiaryPage';
import Contact from './apps/components/pages/ContactPage';
import NotFound from './apps/components/pages/NotFoundPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Top} />
        <Route path="/recreation" component={Recreation} />
        <Route path="/diary" component={Diary} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>
);
