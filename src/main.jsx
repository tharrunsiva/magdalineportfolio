import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Bootstrap 5 Styles
import 'bootstrap/dist/css/bootstrap.min.css';

// Custom Design System & Section Styles
import './styles/global.css';
import './styles/background3d.css';
import './styles/navbar.css';
import './styles/hero.css';
import './styles/sections.css';
import './styles/responsive.css';

import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
