import { MapPin } from 'lucide-react';

export default function BridgeRestaurant() {
  return (
    <div className="bg-black text-white">
      
      {/* Main Content */}
      <main className="py-10 md:py-20">
        
        {/* FULLY RESPONSIVE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 h-auto md:h-[500px]">

          {/* LEFT SECTION */}
          <div className="relative overflow-hidden group cursor-pointer h-[300px] sm:h-[350px] md:h-auto">
            <img 
              src="https://images.unsplash.com/photo-1608270586620-248524c67de9?w=800&q=80"
              alt="Beer glasses"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />

            {/* Overlay */}
            <div className="absolute inset-0 z-10"></div>

            {/* Text */}
            <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif mb-4">
                Promotions
              </h2>

              <button className="
                px-5 py-3 
                text-base md:text-lg
                border-b-2 border-transparent
                hover:border-white 
                transition-all duration-300
              ">
                Learn more
              </button>
            </div>
          </div>

          {/* MIDDLE SECTION */}
          <div className="relative overflow-hidden group cursor-pointer h-[300px] sm:h-[350px] md:h-auto">
            <img 
              src="/map.webp"
              alt="Map location"
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
            />
            
            <div className="absolute inset-0 bg-black/30 z-10"></div>

            <div className="relative z-20 h-full flex items-center justify-center">
              <MapPin size={48} className="text-white" />
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="relative overflow-hidden group cursor-pointer h-[300px] sm:h-[350px] md:h-auto">
            <img 
              src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80"
              alt="Cocktail making"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />

            {/* Overlay */}
            <div className="absolute inset-0  z-10"></div>

            {/* Text */}
            <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif mb-4">
                Promotions
              </h2>

              <button className="
                px-5 py-3 
                text-base md:text-lg
                border-b-2 border-transparent
                hover:border-white 
                transition-all duration-300
              ">
                Learn more
              </button>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
