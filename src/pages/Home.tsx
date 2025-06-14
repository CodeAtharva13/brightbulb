
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Main Image Section */}
      <div className="relative min-h-[80vh] flex items-center justify-center">
        <img 
          src="/lovable-uploads/f2122894-dbf5-40fc-be08-e4fc8c335189.png" 
          alt="Cross-Punched Out Now! - Game boxes display" 
          className="max-w-full max-h-full object-contain"
        />
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

      {/* Back to Top Button */}
      <button className="fixed bottom-8 right-8 w-12 h-12 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center text-white transition-colors">
        <span className="text-xl">↑</span>
      </button>
    </div>
  );
};

export default Home;
