import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from '../App';
import Layout from './Layout/Layout';
import Home from './Home/Home';
import Tour from './Tour/Tour';
import Book from './Book/Book';
import Login from './Login/Login';
import Register from './Register/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('../../public/rooms.json')
      },
      {
        path: '/tour',
        element: <Tour></Tour>
      },
      {
        path: '/book',
        element: <Book></Book>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ]
  },
]);

const Routers = () => {
  return (
    <div>
      
    </div>
  );
};

export default router;