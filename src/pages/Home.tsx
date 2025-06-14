
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const features = [
    {
      title: "Think",
      image: "/lovable-uploads/558f3fb3-96e0-47a7-845d-b4f4966afa65.png"
    },
    {
      title: "Solve", 
      image: "/lovable-uploads/558f3fb3-96e0-47a7-845d-b4f4966afa65.png"
    },
    {
      title: "Grow",
      image: "/lovable-uploads/558f3fb3-96e0-47a7-845d-b4f4966afa65.png"
    },
    {
      title: "Win",
      image: "/lovable-uploads/558f3fb3-96e0-47a7-845d-b4f4966afa65.png"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Product Boxes */}
      <section className="relative bg-black text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 tracking-wide">
            CROSS-PUNCHED OUT NOW!
          </h1>
          
          <div className="relative max-w-4xl mx-auto mb-8">
            <img 
              src="/lovable-uploads/e9cf32be-6964-439b-9f4f-a832f4f66265.png" 
              alt="Cross-Punched Product Boxes" 
              className="w-full h-auto"
            />
            
            {/* Buy Now Button positioned over the image */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
              <Button 
                className="bg-white text-black hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg border-2 border-yellow-400"
              >
                Buy Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Not Your Typical BINGO Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto text-center">
          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mb-8">
            <div className="w-3 h-3 bg-green-600 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            <div className="w-6 h-6 border-2 border-red-600 rounded-full"></div>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Not Your Typical <span className="text-red-600">BINGO!</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-md mx-auto">
            "Think. Solve. Evolve."
          </p>

          {/* Features Grid - Responsive */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="mb-4">
                  <div className="w-24 h-24 md:w-32 md:h-32 mx-auto bg-yellow-100 rounded-full flex items-center justify-center">
                    {/* Placeholder for feature illustrations */}
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-yellow-400 rounded-full"></div>
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-semibold">{feature.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross Out Boring Parties Section */}
      <section className="relative py-16 px-4 bg-cover bg-center" 
               style={{
                 backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/lovable-uploads/b5bf1530-29e1-4a20-97b1-f63be758b059.png')`
               }}>
        <div className="container mx-auto text-center text-white">
          <h2 className="text-4xl md:text-6xl font-bold mb-12 tracking-wide">
            CROSS OUT BORING PARTIES
          </h2>
          
          <Button 
            className="bg-white text-black hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg"
          >
            Know More
          </Button>
        </div>
      </section>

      {/* Back to Top Button */}
      <button className="fixed bottom-8 right-8 w-12 h-12 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center text-white transition-colors z-10">
        <span className="text-xl">↑</span>
      </button>
    </div>
  );
};

export default Home;
