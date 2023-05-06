import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Reservation from './Components/reservationPage/Reservation.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/Reservations',
    element: <Reservation />
  },
  {
    path: '/Home',
    element: <App />
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
