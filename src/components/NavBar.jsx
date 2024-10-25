import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png"; // Adjust the path if necessary
    
const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    // {
    //   id: 1,
    //   link: "home",
    //   path: "/",
    // },
    {
      id: 2,
      link: "sign-up",
      path: "/sign-up",
    },
    {
      id: 3,
      link: "login",
      path: "/login",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 bg-transparent text-white z-50">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-20 w-40 mr-4" /> {/* Adjust size */}
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:!flex">
        {links.map(({ id, link, path }) => (
          <li
            key={id}
            className="px-4 cursor-pointer font-medium capitalize text-gray-400 hover:text-yellow-400 duration-200 group"
          >
            <span className="relative inline-block">
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive
                    ? "text-violet-900 hover:text-yellow-400 font-bold text-lg"
                    : "text-violet-900 hover:text-yellow-400 font-bold text-lg"
                }
              >
                {link}
              </NavLink>
              <span className="left-0 bottom-0 w-0 h-[2px] bg-yellow-400 transition-all duration-200 group-hover:w-full"></span>
            </span>
          </li>
        ))}
      </ul>

      {/* Hamburger Menu */}
      <div
        onClick={() => setNav(!nav)}
        className="pr-4 z-10 cursor-pointer text-violet-700 hover:scale-105 hover:text-yellow-400 duration-200 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* Mobile Menu */}
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-violet-700 lg:hidden">
          {links.map(({ id, link, path }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl hover:scale-105 hover:text-yellow-400"
            >
              <NavLink
                onClick={() => setNav(false)}
                to={path}
                className={({ isActive }) =>
                  isActive
                    ? "text-violet-900 hover:text-yellow-400 font-bold text-lg"
                    : "text-violet-900 hover:text-yellow-400 font-bold text-lg"
                }
              >
                {link}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
