import React from 'react';
import { Link } from 'react-router-dom';
import FloatingDockDemo from './floating-dock-demo';

const Navbar: React.FC = () => {
  return (
    <nav className="w-full py-6 px-6 md:px-12 flex items-center justify-center z-50 relative">
      <div className="absolute left-6 md:left-12">
        <Link to="/" className="flex items-center gap-2 text-white hover:opacity-90 transition-opacity">
          <span className="text-xl font-bold font-display tracking-wide">Kuro PDF</span>
        </Link>
      </div>
      <FloatingDockDemo />
    </nav>
  );
};

export default Navbar;