
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
    </div>
  );
};

export default Home;
