import React from 'react';
import Union from "../../assets/Union.png";

const Hero = () => {
    return (
        <div>
             {/* ================= HERO SECTION ================= */}
                  <section className="  pb-16 pt-35 overflow-hidden">
                    {/* Address */}
                    <p className="text-center text-xs text-gray-600 mb-4">
                      🏠 Dolskaya St. 1, Moscow 115569 Russia
                    </p>
            
                    {/* Heading */}
                    <h1 className="text-center  max-w-5xl mx-auto px-4 text-3xl md:text-6xl font-light tracking-wide text-gray-900">
                      BEGIN AN EXPLORATION THROUGH A GALLERY SHOWCASING ARTISAN CREATIVITY.
                    </h1>
            
                    {/* 🔥 Union Banner Image */}
                    <div className="px-4 mt-10">
                      <img
                        src={Union}
                        alt="Gallery Artisan"
                        className="w-full max-h-[420px] object-cover rounded-xl shadow-lg"
                      />
                    </div>
            
                   
                    
            
                    {/* Small text */}
                    <p className="text-center text-xs text-gray-500 mt-10">
                      A blend of talented genius in art
                    </p>
            
                    {/* Bottom heading */}
                    <h2 className="text-center max-w-4xl mx-auto px-4 mt-4 text-xl md:text-3xl font-light text-gray-800">
                      STEP INTO A REALM OF ARTISTIC EXPRESSION, WHERE OUR GALLERY SHOWCAS{" "}
                      <span className="text-gray-400">
                        THE EXTRAORDINARY WORKS OF TALENTED ARTISTS FROM ACROSS THE WORLD
                      </span>
                    </h2>
                  </section>
        </div>
    );
}

export default Hero;
