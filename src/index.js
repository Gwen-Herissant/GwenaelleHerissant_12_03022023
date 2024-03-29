import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
//import App from './App';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Root from './routes/Root';
import reportWebVitals from './reportWebVitals';
import Profile from './pages/Profile';
import ErrorPage from './pages/ErrorPage';

/**
 * React router
 */
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Profile />
      }, 
      {
        path: '/user/:id',
        element: <Profile />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
