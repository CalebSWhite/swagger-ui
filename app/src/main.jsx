import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SwaggerUiPage from './SwaggerUiPage/SwaggerUiPage';
import SelectApiPage from './SelectApiPage/SelectApiPage';
import AppFooter from './AppFooter/AppFooter';
import './index.css';

if (document.title === '%PAGE_TITLE%' && window?._env_?.PAGE_TITLE) {
  document.title = window._env_.PAGE_TITLE;
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <SelectApiPage/>,
  },
  {
    path: '/:api',
    element: <SwaggerUiPage/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <RouterProvider router={router}/>
      <AppFooter/>
    </div>
  </React.StrictMode>,
);
