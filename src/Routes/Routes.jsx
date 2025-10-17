import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import TotalApps from '../Pages/TotalApps/TotalApps';
import Installation from '../Pages/Installation/Installation';
import AppsDetails from '../Pages/AppsDetails/AppsDetails';



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
          loader: async () => {
            const res = await fetch('twentyBooks.json');
            return res.json();
          },
          path: '/totalApps',
          Component:  TotalApps
        },
        {
          path: '/installation',
          Component: Installation,
        },
        {
          path: '/appsDetails/:id',
          Component: AppsDetails
        }
        
    ]
    
    
  },
]);




