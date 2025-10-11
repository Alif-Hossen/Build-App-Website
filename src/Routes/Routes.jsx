import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import AllApps from './AllApps/AllApps';


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            index: true,
            loader: async  () => {
              const res = await fetch('eightBooks.json');
              return res.json();
            },
            path: '/',
            Component: Home
        },
        {
          path: '/allApps',
          Component: AllApps
        },
        {
          
        }
    ]
    
    
  },
]);




