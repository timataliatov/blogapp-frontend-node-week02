import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const Header = ({ toggleTheme, theme }) => (
  <header className="navbar bg-base-100 shadow-lg p-4">
    <div className="flex-1">
      <a className="btn btn-ghost normal-case text-xl">BlogDeploy</a>
    </div>
    <div className="flex-none">
      <button className="btn btn-square btn-ghost"onClick={toggleTheme}>
        {theme === 'light' ? <FaMoon size={30}/> : <FaSun size={30}/>}
      </button>
    </div>
  </header>
);

export default Header;
