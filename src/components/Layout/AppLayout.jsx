/**
 * AppLayout.jsx
 * Main layout wrapper for authenticated pages — includes Sidebar + Navbar.
 */
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

// Map route paths to page titles
const pageTitles = {
  '/': 'Home',
  '/dashboard': 'Threat Dashboard',
  '/url-checker': 'URL Safety Checker',
  '/awareness': 'Tips & Awareness',
};

const AppLayout = () => {
  const location = useLocation();
  const title = pageTitles[location.pathname] || 'CyberAware';

  return (
    <div className="flex min-h-screen bg-cyber-dark">
      <Sidebar />
      <div className="flex-1 flex flex-col min-h-screen">
        <Navbar title={title} />
        <main className="flex-1 p-4 lg:p-8 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
