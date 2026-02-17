import React from 'react';
import one from "../../assets/one.png";
import chatgpt from "../../assets/chatgpt.png";
import chatgpt1 from "../../assets/chatgpt1.png";
import chatgpt2 from "../../assets/chatgpt2.png";
import chatgpt3 from "../../assets/chatgpt3.png";
import chatgpt4 from "../../assets/chatgpt4.png";


const AboutUs = () => {
    return (
        <div>
             <section className=" relative py-2 overflow-hidden">
  <div className="max-w-7xl mx-auto ">

    {/* IMAGE COLLAGE */}
    <div className=" flex justify-around justify-center items-center gap-10 mb-14">

        <img
        src={one}
        className="w-42 h-69 object-cover  rounded shadow-lg"
        alt=""
      />

      {/* Left small stack */}
      <div className="flex flex-col gap-6">
        <img
          src={chatgpt}
          className="w-66 h-50 object-cover rounded shadow-md"
          alt=""
        />
        <img
          src={chatgpt1}
          className="w-66 h-50 object-cover rounded shadow-md"
          alt=""
        />
      </div>

      {/* Middle large */}
      <img
        src={chatgpt2}
        className="w-72 h-89 object-cover rounded shadow-lg"
        alt=""
      />

      {/* Right highlight card */}
      <div className="relative group">
        <img
          src={chatgpt3}
          className="w-72 h-105 object-cover rounded shadow-xl"
          alt=""
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-black/40 rounded flex flex-col justify-end p-5">
          <h3 className="text-white text-sm font-medium">
            Hall of Frame
          </h3>
          <p className="text-white/80 text-xs mt-2 leading-relaxed">
            Where where vibrant art breathes life into every frame. Step
            into this immersive space.
          </p>
        </div>
      </div>

      {/* Far right faded */}
      <img
        src={chatgpt4}
        className="w-46 h-69 object-cover   rounded shadow-md opacity-60"
        alt=""
      />
    </div>

    {/* BOTTOM CONTENT */}
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
      
      <p className="text-gray-600 text-sm max-w-2xl leading-relaxed">
        Welcome to Gallery Artisan, an avant-garde space dedicated to
        pushing the boundaries of artistic expression. Nestled in the
        cultural heart of Moscow, Russia, our gallery is a testament to
        belief that art has no age limit.
      </p>

      <button className="self-start md:self-auto bg-black text-white text-xs px-6 py-3 rounded-full hover:bg-gray-800 transition">
        More About Us →
      </button>
    </div>

  </div>
</section>
        </div>
    );
}

export default AboutUs;
