import React from "react";
import last1 from "../../assets/last1.png";

const artists = [
  {
    name: "Leaslie Alexander",
    role: "11 Years Old Painter Based in 🇷🇺",
  },
  {
    name: "Kristin Watson",
    role: "Graffiti Artiste de 17ans",
  },
  {
    name: "Floyd Miles",
    role: "🇷🇺 Russian Artist | Art-Influencer",
  },
  {
    name: "Savannah Nguyen",
    role: "International Contemporary Pop-Artist",
  },
  {
    name: "Ali Abdaal",
    role: "Surrealism Russian Artist",
  },
];

function PROFILES() {
  return (
    <section className="bg-[#efefef] py-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT */}
        <div>
          <p className="text-[11px] tracking-[0.25em] text-gray-500 mb-4">
            ARTIST PROFILES
          </p>

          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-5">
            MEET THE VISIONARIES 👨‍🎨
          </h2>

          <p className="text-gray-500 max-w-xl mb-10 text-sm leading-relaxed">
            Delve into the minds of our extraordinary artists...
          </p>

          <div className="w-full">
            {artists.map((artist, index) => (
              <div
                key={index}
                className="flex items-center justify-between gap-4 border-b border-gray-300 py-5 group cursor-pointer"
              >
                <div>
                  <h3 className="font-medium text-gray-900 text-lg">
                    {artist.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {artist.role}
                  </p>
                </div>

                <div className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-sm transition-all duration-300 group-hover:bg-black group-hover:text-white group-hover:border-black group-hover:rotate-45">
                  ↗
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center lg:justify-end">
          <img
            src={last1}
            alt="artist"
            className="w-full max-w-md object-cover shadow-xl rounded-[40px]
                       [clip-path:polygon(8%_0,100%_0,92%_100%,0%_100%)]"
          />
        </div>
      </div>
    </section>
  );
}

export default PROFILES;