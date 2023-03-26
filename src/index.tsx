import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Top from './apps/components/templates/Top';
import Recreation from './apps/components/templates/Recreation';
import Diary from './apps/components/templates/Diary';
import Contact from './apps/components/templates/Contact';
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

function NotFound() {
  return <h1>404 Not Found</h1>;
}
