import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-pink-100 via-rose-100 to-pink-200 px-4">

      <p className="text-xl md:text-2xl text-gray-700 text-center mb-10 italic max-w-xl">
        A few lines for you from the bottom of my heart 💖
      </p>

      <button
        onClick={() => navigate('/shayari/1')}
        className="px-12 py-4 rounded-full bg-linear-to-r from-pink-400 to-rose-500 
                   text-white text-lg font-semibold shadow-lg
                   hover:shadow-xl hover:scale-105 active:scale-95
                   transition-all duration-300"
      >
        Ready to read 🌸
      </button>

    </div>
  );
};

export default Home;
