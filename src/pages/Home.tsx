
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Cross-Punched Out Now */}
      <section className="relative bg-black text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-12 tracking-wider">
            CROSS-PUNCHED OUT NOW!
          </h1>
          
          {/* Product Boxes */}
          <div className="flex justify-center items-center mb-8 space-x-4">
            {/* Orange/Yellow Box */}
            <div className="w-40 h-56 md:w-48 md:h-64 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg transform rotate-[-5deg] relative shadow-lg">
              <div className="absolute inset-4 flex flex-col justify-between">
                <div className="flex justify-end">
                  <div className="w-3 h-3 bg-orange-600 rounded-full"></div>
                  <div className="w-3 h-3 bg-orange-700 rounded-full ml-1"></div>
                </div>
                <div>
                  <div className="text-black font-bold text-xl mb-2">cross</div>
                  <div className="text-red-600 font-bold text-2xl mb-1 relative">
                    <span className="bg-black text-red-600 px-2 py-1 rounded transform -rotate-3 inline-block">punched</span>
                  </div>
                  <div className="text-black text-sm font-medium">NOT YOUR</div>
                </div>
              </div>
            </div>
            
            {/* Green Box */}
            <div className="w-40 h-56 md:w-48 md:h-64 bg-gradient-to-br from-green-600 to-green-800 rounded-lg relative shadow-lg">
              <div className="absolute inset-4 flex flex-col justify-between">
                <div className="flex justify-end">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-orange-500 rounded-full ml-1"></div>
                </div>
                <div>
                  <div className="text-white font-bold text-xl mb-2">cross</div>
                  <div className="text-red-500 font-bold text-2xl mb-1 relative">
                    <span className="bg-black text-red-500 px-2 py-1 rounded transform -rotate-3 inline-block">punched</span>
                  </div>
                  <div className="text-white text-sm font-medium">NOT YOUR</div>
                </div>
              </div>
            </div>
            
            {/* Light Green Box */}
            <div className="w-40 h-56 md:w-48 md:h-64 bg-gradient-to-br from-green-400 to-green-600 rounded-lg transform rotate-[5deg] relative shadow-lg">
              <div className="absolute inset-4 flex flex-col justify-between">
                <div className="flex justify-end">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full ml-1"></div>
                  <div className="text-xs font-medium mt-1 text-black">bright<br/>bulb labs</div>
                </div>
                <div>
                  <div className="text-black font-bold text-xl mb-2">cross</div>
                  <div className="text-red-600 font-bold text-2xl mb-1 relative">
                    <span className="bg-black text-red-600 px-2 py-1 rounded transform -rotate-3 inline-block">punched</span>
                  </div>
                  <div className="text-black text-sm font-medium">NOT YOUR TYPICAL BINGO</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Buy Now Button */}
          <Button 
            className="bg-white text-green-700 hover:bg-gray-100 px-8 py-3 text-lg font-semibold rounded-lg border-4 border-yellow-400 mb-8"
          >
            Buy Now
          </Button>
          
          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 space-x-3">
            <div className="w-4 h-4 bg-green-600 rounded-full"></div>
            <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
            <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Not Your Typical BINGO Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Not Your Typical <span className="text-red-600">BINGO!</span>
          </h2>
          <p className="text-lg text-gray-600 mb-12">"Think. Solve. Evolve."</p>
          
          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Think */}
            <div className="text-center">
              <div className="mb-4 h-32 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/dec7774d-d99c-40ea-8f6a-4ddfec7cc484.png" 
                  alt="Think illustration" 
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="font-semibold text-lg">Think</h3>
            </div>
            
            {/* Solve */}
            <div className="text-center">
              <div className="mb-4 h-32 flex items-center justify-center">
                <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center">
                  <div className="text-2xl">?</div>
                </div>
              </div>
              <h3 className="font-semibold text-lg">Solve</h3>
            </div>
            
            {/* Grow */}
            <div className="text-center">
              <div className="mb-4 h-32 flex items-center justify-center">
                <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center">
                  <div className="text-2xl">↗</div>
                </div>
              </div>
              <h3 className="font-semibold text-lg">Grow</h3>
            </div>
            
            {/* Win */}
            <div className="text-center">
              <div className="mb-4 h-32 flex items-center justify-center">
                <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center">
                  <div className="text-2xl">🏆</div>
                </div>
              </div>
              <h3 className="font-semibold text-lg">Win</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Cross Out Boring Parties Section */}
      <section className="relative py-20 px-4 bg-black text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{
            backgroundImage: `url('/lovable-uploads/18aa1ccf-7744-46d8-90f7-42dabb0a9ab1.png')`
          }}
        />
        <div className="relative container mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-12 tracking-wider">
            CROSS OUT BORING PARTIES
          </h2>
          
          <Button 
            className="bg-white text-green-700 hover:bg-gray-100 px-8 py-3 text-lg font-semibold rounded-lg"
          >
            Know More
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
