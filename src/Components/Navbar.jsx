import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="w-full bg-linear-to-r from-pink-300 via-rose-300 to-red-400 relative">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-center gap-3 relative">

        <button
          onClick={() => navigate('/')}
          className="absolute left-2 text-white bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded-full shadow-md transition-all duration-300"
        >
          Home
        </button>

        <span className="text-pink-500 text-xl">♥</span>

        <h1 className="text-3xl font-semibold text-gray-700 tracking-wide">
          Shayaries
        </h1>

        <span className="relative text-pink-500 text-2xl italic">
          for you
          <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-pink-500 rounded-full"></span>
        </span>

        <span className="text-pink-500 text-xl">♥</span>

      </div>
    </nav>
  );
};

export default Navbar;
