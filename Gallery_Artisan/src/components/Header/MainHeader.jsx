import React from "react";
import { NavLink } from "react-router-dom";

const MainHeader = () => {
  const linkClass =
    "text-gray-700 text-sm font-medium px-5 py-1.5 rounded-full hover:text-black";

  const activeClass = "bg-black text-white";

  return (
    <div className=" fixed w-full  py-4 ">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        
        {/* Logo */}
        <div className="text-black font-semibold leading-tight">
          <div>Gallery</div>
          <div>Artisan</div>
        </div>

        {/* Menu */}
        <ul className="flex items-center gap-3 bg-white px-4 py-2 rounded-full shadow-sm">
          
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : ""}`
            }
          >
            HOME
          </NavLink>

          <NavLink
            to="/story"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : ""}`
            }
          >
            STORY
          </NavLink>

          <NavLink
            to="/artist"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : ""}`
            }
          >
            ARTIST
          </NavLink>

          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : ""}`
            }
          >
            GALLERY
          </NavLink>

          <NavLink
            to="/press-release"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : ""}`
            }
          >
            PRESS RELEASE
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : ""}`
            }
          >
            CONTACT
          </NavLink>

        </ul>

        {/* Language */}
        <div className="flex items-center gap-3 text-sm font-medium">
          <span className="cursor-pointer">🇬🇧 EN</span>
          <span className="text-gray-400">|</span>
          <span className="text-gray-500 cursor-pointer">🇷🇺 RU</span>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;