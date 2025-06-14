
import { useNavigate } from "react-router-dom";

const CrossPunched = () => {
  const navigate = useNavigate();

  const handleImageClick = () => {
    // You can change this URL to wherever you want to redirect
    window.open('https://example.com', '_blank');
    // Or use navigate('/some-route') for internal routing
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Clickable Background Image */}
      <img 
        src="/lovable-uploads/be1e48ef-1d1b-4898-be79-7036ea686a8b.png" 
        alt="Cross-Punched - Not Your Typical BINGO" 
        className="w-full h-full object-cover cursor-pointer hover:opacity-95 transition-opacity"
        onClick={handleImageClick}
      />
      
      {/* New section below */}
      <div className="w-full bg-white">
        <img 
          src="/lovable-uploads/3c8bf824-f9cd-4b61-8a28-afc0214e32a4.png" 
          alt="What is Cross-Punched? - Game description" 
          className="w-full h-auto block"
        />
      </div>

      {/* Enhanced Grid layout for game examples */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src="/lovable-uploads/42ee9122-0758-4dbf-b0f1-43f9a016daea.png" 
                    alt="Cross-Punched game example with Nike card" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
                  <div className="text-white text-center p-6 pb-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-3xl font-bold mb-2 tracking-wide">CROSS</h3>
                    <p className="text-sm uppercase tracking-wider opacity-90">Nike Brand Challenge</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src="/lovable-uploads/c1acdaf2-c2f8-43d6-81a9-b87b8936f12b.png" 
                    alt="Cross-Punched game examples with multiple cards" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
                  <div className="text-white text-center p-6 pb-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-3xl font-bold mb-2 tracking-wide">PUNCHED</h3>
                    <p className="text-sm uppercase tracking-wider opacity-90">Multiple Game Cards</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group cursor-pointer md:col-span-2 lg:col-span-1">
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src="/lovable-uploads/1752119e-c2c6-4ec0-b6dd-8dffa8837349.png" 
                    alt="Cross-Punched completed game board" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
                  <div className="text-white text-center p-6 pb-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-3xl font-bold mb-2 tracking-wide">CROSS-PUNCHED</h3>
                    <p className="text-sm uppercase tracking-wider opacity-90">Completed Game Board</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrossPunched;
