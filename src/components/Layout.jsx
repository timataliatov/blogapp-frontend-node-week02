import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { useTheme } from './ThemeProvider';

const Layout = ({ children, user, onLogout }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-base-200 transition-colors duration-300 flex flex-col">
      <Header toggleTheme={toggleTheme} theme={theme} user={user} onLogout={onLogout} />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
