import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import Context from "./context/Context.jsx";
import Context from "./assets/pages/Context";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Context>
    <App />
    </Context>

  </StrictMode>,
)
