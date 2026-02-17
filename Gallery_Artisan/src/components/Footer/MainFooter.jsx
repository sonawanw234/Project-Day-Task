import React from "react";
import { FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";

const MainFooter = () => {
  return (
    <footer className="bg-gradient-to-r from-[#1b1b1b] to-[#111] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Top grid */}
        <div className="grid md:grid-cols-3 gap-10">
          
          {/* Left */}
          <div>
            <h2 className="text-white font-semibold text-lg leading-tight">
              Gallery <br /> Artisan
            </h2>
            <p className="text-sm mt-4 text-gray-400">
              Gallery, art projects and graphic publishing
            </p>
            <p className="text-sm mt-4 text-gray-400">
              1901 Thornridge Cir. <br />
              Shiloh, Hawaii 81063
            </p>
          </div>

          {/* Center */}
          <div>
            <h3 className="text-white font-medium mb-3">
              Opening Hours
            </h3>
            <p className="text-sm text-gray-400">
              Monday – Friday from 11:00am to 6:00 pm <br />
              Saturday by appointment
            </p>

            {/* Social icons */}
            <div className="flex gap-4 mt-4 text-white">
              <FiGlobe className="cursor-pointer hover:text-gray-400" />
              <FaInstagram className="cursor-pointer hover:text-gray-400" />
              <FaTwitter className="cursor-pointer hover:text-gray-400" />
              <FaWhatsapp className="cursor-pointer hover:text-gray-400" />
            </div>
          </div>

          {/* Right */}
          <div>
            <h3 className="text-white font-medium mb-3">Legal</h3>

            <ul className="space-y-2 text-sm">
              <li className="border-b border-gray-700 pb-2 hover:text-white cursor-pointer">
                Privacy Data
              </li>
              <li className="border-b border-gray-700 pb-2 hover:text-white cursor-pointer">
                Non Disclosure Agreement
              </li>
              <li className="border-b border-gray-700 pb-2 hover:text-white cursor-pointer">
                License
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom line */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-xs text-gray-500">
          2023 Gallery Artisan. All Right Reserved.
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;