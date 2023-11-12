import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { HashRouter as BrowserRouter } from "react-router-dom"
import './index.css'
import ScrollToTop from "./ScrollToTop"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)