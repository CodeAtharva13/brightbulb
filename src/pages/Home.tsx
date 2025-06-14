
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section with Dots Navigation */}
      <div className="relative min-h-[80vh] flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-8">
            Welcome to Bright Bulb Labs
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Where learning meets fun—with games, events, and content that get Gen Z thinking, questioning, and talking.
          </p>
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
          <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
          <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
          <div className="w-4 h-4 bg-yellow-300 rounded-full"></div>
        </div>

        {/* Back to Top Button */}
        <button className="fixed bottom-8 right-8 w-12 h-12 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center text-white transition-colors">
          <span className="text-xl">↑</span>
        </button>
      </div>

      {/* Cross-Punched Product Section */}
      <div className="relative bg-black py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Title */}
          <h2 className="text-4xl md:text-6xl font-bold text-white text-center mb-12">
            CROSS-PUNCHED OUT NOW!
          </h2>

          {/* Product Boxes */}
          <div className="relative flex justify-center items-center gap-8 mb-12">
            {/* Orange Box */}
            <div className="w-48 h-64 bg-orange-400 rounded-lg transform -rotate-12 shadow-2xl relative">
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                <div className="bg-black text-white px-4 py-2 rounded-full mb-4 transform rotate-12">
                  <span className="font-bold text-lg">cross</span>
                </div>
                <div className="text-red-600 font-bold text-4xl mb-2 transform rotate-12">
                  punched
                </div>
                <div className="text-black font-bold text-sm transform rotate-12">
                  NOT YOUR TYPICAL BINGO
                </div>
              </div>
            </div>

            {/* Green Box (Center) */}
            <div className="w-52 h-68 bg-green-600 rounded-lg shadow-2xl relative z-10">
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                <div className="bg-black text-white px-4 py-2 rounded-full mb-4">
                  <span className="font-bold text-lg">cross</span>
                </div>
                <div className="text-red-600 font-bold text-4xl mb-2">
                  punched
                </div>
                <div className="text-white font-bold text-sm">
                  NOT YOUR TYPICAL BINGO
                </div>
              </div>
              
              {/* Buy Now Button */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                <Button className="bg-green-500 hover:bg-green-600 text-black font-bold px-8 py-3 rounded-lg text-lg border-2 border-yellow-400">
                  Buy Now
                </Button>
              </div>
            </div>

            {/* Light Green Box */}
            <div className="w-48 h-64 bg-green-300 rounded-lg transform rotate-12 shadow-2xl relative">
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                <div className="bg-black text-white px-4 py-2 rounded-full mb-4 transform -rotate-12">
                  <span className="font-bold text-lg">cross</span>
                </div>
                <div className="text-red-600 font-bold text-4xl mb-2 transform -rotate-12">
                  punched
                </div>
                <div className="text-black font-bold text-sm transform -rotate-12">
                  NOT YOUR TYPICAL BINGO
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-4 mt-16">
            <div className="w-4 h-4 bg-green-600 rounded-full"></div>
            <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
            <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
