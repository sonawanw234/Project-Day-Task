import React from 'react';
import last from "../../assets/last.svg";

const NEWSLETTER = () => {
    return (
        <div>
            <section className="relative text-white h-auto overflow-hidden">
  {/* 🌌 BACKGROUND GRADIENT */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,#5a2a52,transparent_40%),linear-gradient(180deg,#0e0e0f_0%,#151515_100%)]"></div>

  <div className="relative z-10 max-w-3xl mx-auto px-6 pt-28 pb-44 text-center">
    
    {/* label */}
    <p className="text-[10px] tracking-[0.35em] text-gray-300 mb-6">
      NEWSLETTER
    </p>

    {/* heading */}
    <h2 className="text-3xl md:text-5xl font-light leading-tight mb-6">
      SIGN UP FOR 🏛 GALLERY <br />
      ARTISAN'S NEWSLETTER
    </h2>

    {/* description */}
    <p className="text-gray-300 text-[13px] leading-relaxed max-w-2xl mx-auto mb-10">
      Always stay informed about Gallery Artisan's latest dates,
      exhibitions and most exciting projects. Sign up for the
      newsletter and become part of a vibrant community that
      celebrates art, creativity and inspiration.
    </p>

    {/* FORM */}
    <div className="space-y-4 flex flex-col items-center">

      {/* names */}
      <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
        <input
          type="text"
          placeholder="First Name"
          className="flex-1 bg-white text-black text-sm px-5 py-3 rounded-full outline-none shadow-sm"
        />
        <input
          type="text"
          placeholder="Last Name"
          className="flex-1 bg-white text-black text-sm px-5 py-3 rounded-full outline-none shadow-sm"
        />
      </div>

      {/* email row */}
      <div className="relative w-full max-w-md">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full bg-white text-black text-sm pl-5 pr-28 py-3 rounded-full outline-none shadow-sm"
        />

        <button className="absolute right-1 top-1 bottom-1 px-5 bg-black text-white text-sm rounded-full hover:bg-gray-800 transition">
          Submit →
        </button>
      </div>

      {/* checkbox */}
      <label className="flex items-center gap-2 text-[11px] text-gray-300 mt-3 cursor-pointer">
        <input type="checkbox" className="accent-white w-3 h-3" />
        I confirm The Privacy Policy
      </label>
    </div>
  </div>

  {/* 🖼 ANGLED GALLERY WALL */}
  <div className=" w-full  -mt-55 bottom-0 relative left-0 ">
    <img
      src={last}
      className=" w-full  "
    />
  </div>
</section>
        </div>
    );
}

export default NEWSLETTER;
