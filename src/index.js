import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Carrinho from './Carrinho';
import Cadastro from './Cadastro';
import Login from './Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/Cadastro",
    element: <Cadastro />
  },
  {
    path: "/Carrinho",
    element: <Carrinho />
  },
  {
    path: "/Login",
    element: <Login />
  },
])



const root = ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);

