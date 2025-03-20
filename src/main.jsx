import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, redirect, RouterProvider } from "react-router-dom";
import SignUpScreen from './SignUpScreen.jsx';
import AdminLogin from './admin/AdminLogin.jsx';
import AdminCreate from './admin/AdminCreate.jsx';
import Admin, { AdminLoaderDashBoard } from './admin/Admin.jsx';
import AdminUser, { tournamentsAdminScreenLoader } from './admin/AdminUsers.js';
import TournamentsScreen, { tournamentsScreenLoader } from './tournaments/TournamentsScreen.js';
import AdminNew from './admin/AdminNew.js';
import AdminTurniri, { tournamentsAdminScreenLoader2 } from './admin/AdminTurniri.js';
import AdminView from './admin/AdminView.js';
import AdminLandingScreen from './adminview/AdminLanding.jsx';
import AdminTournaments, { AdminLoader } from './adminview/AdminTournaments.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/tt4",
    element: <SignUpScreen />,
  },
  {
    path: "/admin/login",
    element: <AdminLogin />,
  },
  {
    path: "/admin/create",
    element: <AdminCreate />,
  },
  {
    path: "/admin",
    element: <Admin />,
    loader: AdminLoaderDashBoard
  },
  {
    path: "/admin/turniri",
    element: <AdminTurniri />,
    loader: tournamentsAdminScreenLoader2
  },
  {
    path: "/admin/users",
    element: <AdminUser />,
    loader: tournamentsAdminScreenLoader
  },
  {
    path: "/admin/new",
    element: <AdminNew />,
  },
  {
    path: "/admin/view",
    element: <AdminView />,
    children: [
      {
        path: "landing",
        element: <AdminLandingScreen />,
      },
      {
        path: "turniri",
        element: <AdminTournaments />,
        loader: AdminLoader
      },
    ],
  },
  {
    path: "/t",
    element: <TournamentsScreen />,
    loader: tournamentsScreenLoader,
  },
  {
    path: "/t/:id",
    element: <SignUpScreen />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)