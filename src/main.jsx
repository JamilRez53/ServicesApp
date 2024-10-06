import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'
import './index.css'
import {BrowserRouter as Router} from "react-router-dom";
import "./assets/css/fonts.css"
createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <Router>
      <App />
    </Router>
    
  // </StrictMode>,
)
