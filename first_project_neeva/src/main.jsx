import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import UserPage from './Day10/UserPage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <UserPage/>

  </StrictMode>,
);
