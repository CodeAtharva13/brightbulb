
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Main Image Section with Buy Now Button Overlay */}
      <div className="relative min-h-[80vh] flex items-center justify-center">
        <img 
          src="/lovable-uploads/f2122894-dbf5-40fc-be08-e4fc8c335189.png" 
          alt="Cross-Punched Out Now! - Game boxes display" 
          className="max-w-full max-h-full object-contain"
        />
        {/* Buy Now Button Overlay - positioned over the image button */}
        <div className="absolute bottom-[15%] left-1/2 transform -translate-x-1/2 md:bottom-[12%]">
          <Button 
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 md:px-6 md:py-3 text-xs md:text-sm font-bold rounded-md shadow-lg transition-all duration-300 hover:scale-105 opacity-90 hover:opacity-100"
            onClick={() => console.log('Buy Now clicked')}
          >
            Buy Now
          </Button>
        </div>
      </div>

      {/* BINGO Section with Text */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Not Your Typical <span className="text-red-600">BINGO!</span>
          </h2>
          <p className="text-2xl text-gray-600 mb-8">
            Think. Solve. Evolve.
          </p>
          
          {/* New Illustrations Image */}
          <img 
            src="/lovable-uploads/d438b8c0-84b5-4504-9fef-6694ec003261.png" 
            alt="Think, Solve, Grow, Win - Process illustrations" 
            className="max-w-full h-auto mx-auto"
          />
        </div>
      </div>

      {/* Third Image Section with Know More Button Overlay */}
      <div className="bg-gray-100 relative">
        <img 
          src="/lovable-uploads/1e6cc659-9907-4c87-a8dd-88516b12a1cb.png" 
          alt="Cross Out Boring Parties - Know More" 
          className="w-full h-auto block"
        />
        {/* Know More Button Overlay - positioned over the image button */}
        <div className="absolute bottom-[15%] left-1/2 transform -translate-x-1/2 md:bottom-[12%]">
          <Button 
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 md:px-6 md:py-3 text-xs md:text-sm font-bold rounded-md shadow-lg transition-all duration-300 hover:scale-105 opacity-90 hover:opacity-100"
            onClick={() => console.log('Know More clicked')}
          >
            Know More
          </Button>
        </div>
      </div>

      {/* Back to Top Button */}
      <button className="fixed bottom-8 right-8 w-12 h-12 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center text-white transition-colors">
        <span className="text-xl">↑</span>
      </button>
    </div>
  );
};

export default Home;
