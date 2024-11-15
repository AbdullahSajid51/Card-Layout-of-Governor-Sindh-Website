import React from "react";

const Navbar = () => {
  return (


<nav className="flex flex-wrap justify-between items-center p-4 bg-blue-600">
  {/* Logo */}
  <div className="bg-black h-4 w-10 md:h-6 md:w-12 lg:w-16"></div>

  {/* Subtitle */}
  <div className="bg-orange-600 h-4 w-20 md:h-6 md:w-24 lg:w-32"></div>

  {/* Navigation Links */}
  <ul className="flex flex-wrap items-center space-x-3 md:space-x-5">
    <li className="bg-red-700 h-4 w-10 md:h-6 md:w-12 lg:w-14"></li>
    <li className="bg-orange-700 h-4 w-10 md:h-6 md:w-12 lg:w-14"></li>
    <li className="bg-purple-700 h-4 w-10 md:h-6 md:w-12 lg:w-14"></li>
    {/* <li className="bg-pink-700 h-4 w-10 md:h-6 md:w-12 lg:w-14"></li> */}
  </ul>
</nav>

  );
}; 
// --------------


export default Navbar;


