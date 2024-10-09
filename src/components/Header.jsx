import React from 'react';
import { Link } from 'react-router-dom';
import { FaSun, FaMoon, FaUser, FaSignOutAlt } from 'react-icons/fa';

const Header = ({ toggleTheme, theme, user, onLogout }) => (
  <header className="navbar bg-base-100 shadow-lg px-4 sm:px-8">
    <div className="flex-1">
      <Link to="/" className="btn btn-ghost normal-case text-xl">BlogDeploy</Link>
    </div>
    <div className="flex-none">
      <ul className="menu menu-horizontal px-1 items-center">
        <li><Link to="/" className="btn btn-ghost btn-sm rounded-btn">Home</Link></li>
        <li><Link to="/posts" className="btn btn-ghost btn-sm rounded-btn">Posts</Link></li>
        {user ? (
          <>
            <li className="ml-2">
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium">{user.username}</span>
                <button onClick={onLogout} className="btn btn-ghost btn-circle btn-sm">
                  <FaSignOutAlt className="w-4 h-4" />
                </button>
              </div>
            </li>
          </>
        ) : (
          <li><Link to="/login" className="btn btn-primary btn-sm rounded-btn">Login</Link></li>
        )}
        <li className="ml-2">
          <button className="btn btn-ghost btn-circle btn-sm" onClick={toggleTheme}>
            {theme === 'light' ? <FaMoon className="w-4 h-4" /> : <FaSun className="w-4 h-4" />}
          </button>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
