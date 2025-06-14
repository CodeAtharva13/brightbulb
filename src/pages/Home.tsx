
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

      {/* BINGO Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <img 
            src="/lovable-uploads/41f2f7ed-ecb9-4092-bec4-06cd27687091.png" 
            alt="Not Your Typical BINGO! - Think. Solve. Evolve." 
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
