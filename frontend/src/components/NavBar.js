// src/components/NavBar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NavBar = ({ token, setToken }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken(null);
    navigate('/login');
  };

  return (
    <nav className="bg-gradient-to-r from-orange-500 to-orange-600 flex justify-between items-center p-4 shadow-lg h-20">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-semibold transition duration-300 ease-in-out transform hover:scale-105">
          Task Manager
        </Link>
        <div>
          {!token ? (
            <>
              <Link 
                to="/login" 
                className="text-white px-4 py-2 hover:bg-orange-400 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
              >
                Login
              </Link>
              <Link 
                to="/register" 
                className="text-white px-4 py-2 hover:bg-orange-400 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
              >
                Register
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 hover:bg-red-500 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
