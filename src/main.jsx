import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import ErrorPage from './ErrorPage/ErrorPage';
import Home from './Component/Home/Home';
import ShowJobDetalis from './Component/ShowJobDetalis/ShowJobDetalis';
import Statistics from './Component/Statistics/Statistics';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
       path:'/statistics',
       element:<Statistics></Statistics>
      },
      {
       path:'/job/:id',
       element:<ShowJobDetalis></ShowJobDetalis>,
       loader:()=>fetch('jobs.json')
       
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
