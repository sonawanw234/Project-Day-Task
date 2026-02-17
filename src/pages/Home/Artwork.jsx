import React from 'react';

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

const Artwork = () => {


    return (
        <div>
             {/* ================= ARTWORKS ================= */}
            
            
                 
            
            
            
                  <section className="bg-gradient-to-br from-[#0f0f10] via-[#1a1a1d] to-[#4b1d3f] py-20 text-white">
              <div className="max-w-7xl mx-auto px-6">
                
                {/* TOP HEADER */}
                <div className="grid lg:grid-cols-2 gap-10 items-start mb-14">
                  
                  {/* LEFT */}
                  <div>
                    <p className="text-[11px] tracking-[0.25em] text-gray-400 mb-4">
                      NEW ARTWORK
                    </p>
            
                    <h2 className="text-4xl md:text-5xl font-light leading-tight">
                      UNVEILING OUR 🌐 <br />
                      EXCLUSIVE ARTWORK
                    </h2>
                  </div>
            
                  {/* RIGHT TEXT */}
                  <p className="text-gray-300 max-w-md text-sm leading-relaxed lg:ml-auto">
                    Explore the dynamic world of contemporary art through our current
                    artwork. Each exhibition is a testament to the limitless possibilities
                    of expression. Click below to embark on a visual journey.
                  </p>
                </div>
            
                {/* CARDS */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  
                  {/* CARD 1 */}
                  <div className="group">
                    <span className="inline-block text-[10px] tracking-widest bg-white/10 px-3 py-1 rounded-full mb-4">
                      ABSTRACT ART
                    </span>
            
                    <div className="overflow-hidden rounded-lg">
                      <img
                        src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop"
                        alt="abstract"
                        className="w-full h-[260px] object-cover group-hover:scale-110 transition duration-500"
                      />
                    </div>
            
                    <h3 className="mt-5 text-sm font-medium">
                      WING ABSTRACT ART
                    </h3>
            
                    <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                      We are passionate to capture the works of art of the
                      great artists from our gallery.
                    </p>
            
                    <button className="mt-4 w-full border border-white/30 rounded-full py-2 text-xs hover:bg-white hover:text-black transition">
                      Detail Artwork →
                    </button>
                  </div>
            
                  {/* CARD 2 */}
                  <div className="group mt-18">
                    <span className="inline-block text-[10px] tracking-widest bg-white/10 px-3 py-1 rounded-full mb-4">
                      ANIMAL ART
                    </span>
            
                    <div className="overflow-hidden rounded-lg">
                      <img
                        src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=800&auto=format&fit=crop"
                        alt="elephant"
                        className="w-full h-[260px] object-cover group-hover:scale-110 transition duration-500"
                      />
                    </div>
            
                    <h3 className="mt-5 text-sm font-medium">
                      ELEPHANT ABSTRACT ARTWORK
                    </h3>
            
                    <p className="text-11 text-gray-400 mt-2 leading-relaxed">
                      Soon it’s time! Gallery Artisan’s new family opens in Cologne Artisan in November. On two consecutive days we cordially invite you to the opening and meet & greet with the artist Leslie Alexander!
                    </p>
            
                    <button className="mt-4 w-full border border-white/30 rounded-full py-2 text-xs hover:bg-white hover:text-black transition">
                      Detail Artwork →
                    </button>
                  </div>
            
                  {/* CARD 3 */}
                  <div className="group mt-25">
                    <span className="inline-block text-[10px] tracking-widest bg-white/10 px-3 py-1 rounded-full mb-4">
                      GEOMETRIC ART
                    </span>
            
                    <div className="overflow-hidden rounded-lg">
                      <img
                        src="https://images.unsplash.com/photo-1614851099511-773084f6911d?q=80&w=800&auto=format&fit=crop"
                        alt="mountain"
                        className="w-full h-[260px] object-cover group-hover:scale-110 transition duration-500"
                      />
                    </div>
            
                    <h3 className="mt-5 text-sm font-medium">
                      MOUNTAIN ABSTRACT ARTWORK
                    </h3>
            
                    <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                      The futurist is already here. It's a wonderful
                      intersection of abstraction. Here we invite you all.
                    </p>
            
                    <button className="mt-4 w-full border border-white/30 rounded-full py-2 text-xs hover:bg-white hover:text-black transition">
                      Detail Artwork →
                    </button>
                  </div>
            
                </div>
              </div>
            </section>
            
        </div>
    );
}

export default Artwork;
