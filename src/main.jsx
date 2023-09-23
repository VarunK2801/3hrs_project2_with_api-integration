import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CartProvider from './Components/Context/CartProvider.jsx'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <CartProvider>
    <BrowserRouter>
      <React.StrictMode>
         <App />
      </React.StrictMode>,
    </BrowserRouter>
  </CartProvider>
  
)
