/**
 * Navbar.jsx
 * Top navigation bar with dark mode toggle, search, and user info.
 */
import { useTheme } from '../../context/ThemeContext';
import { useAuth } from '../../context/AuthContext';
import { Sun, Moon, Bell, User } from 'lucide-react';

const Navbar = ({ title }) => {
  const { darkMode, toggleDarkMode } = useTheme();
  const { user } = useAuth();

  return (
    <header className="sticky top-0 z-30 h-16 flex items-center justify-between px-4 lg:px-8 bg-cyber-dark/80 backdrop-blur-xl border-b border-cyber-border">
      {/* Page title */}
      <div className="lg:ml-0 ml-12">
        <h2 className="text-lg font-semibold text-white">{title}</h2>
      </div>

      {/* Right actions */}
      <div className="flex items-center gap-3">
        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
          id="dark-mode-toggle"
          aria-label="Toggle dark mode"
        >
          {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>

        {/* Notifications */}
        <button className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors relative" id="notifications-btn">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-danger rounded-full" />
        </button>

        {/* User avatar */}
        {user && (
          <div className="flex items-center gap-2 pl-3 border-l border-cyber-border">
            <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm text-gray-300 hidden sm:block">{user.name}</span>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
