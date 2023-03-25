import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Top from './apps/components/templates/Top';
import { BrowserRouter, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route path="/" component={Top} />
    </BrowserRouter>
  </React.StrictMode>
);
