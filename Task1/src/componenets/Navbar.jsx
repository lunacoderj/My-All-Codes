import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <header className="sticky top-0 bg-white shadow z-40">
      <nav className="max-w-[1200px] mx-auto flex justify-between items-center px-6 py-4">
        <div className="text-2xl font-extrabold text-gray-900 select-none">Bellana Jagadeesh</div>
        <ul className="flex space-x-6 text-gray-700 font-medium text-lg">
          <li>
            <NavLink to="/" end className={({ isActive }) => isActive ? "text-black border-b-2 border-black pb-1" : "hover:text-black transition"}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? "text-black border-b-2 border-black pb-1" : "hover:text-black transition"}>About Me</NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={({ isActive }) => isActive ? "text-black border-b-2 border-black pb-1" : "hover:text-black transition"}>Projects</NavLink>
          </li>
          <li>
            <NavLink to="/react-projects" className={({ isActive }) => isActive ? "text-black border-b-2 border-black pb-1" : "hover:text-black transition"}>ReactJS Projects</NavLink>
          </li>
          <li>
            <NavLink to="/certifications" className={({ isActive }) => isActive ? "text-black border-b-2 border-black pb-1" : "hover:text-black transition"}>Certifications</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "text-black border-b-2 border-black pb-1" : "hover:text-black transition"}>Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
// This code defines a Navbar component using React and React Router.
// It includes navigation links to different pages of a portfolio website.