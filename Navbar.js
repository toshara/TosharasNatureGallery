import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-green-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Toshara's Nature Gallery</h1>
        <ul className="flex space-x-4">
          <li><a className="text-white" href="#home">Home</a></li>
          <li><a className="text-white" href="#gallery">Gallery</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
