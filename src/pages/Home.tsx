
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
      <section className="relative bg-black text-white py-8 md:py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-6 md:mb-8 tracking-wide">
            CROSS-PUNCHED OUT NOW!
          </h1>
          
          <div className="relative max-w-4xl mx-auto mb-6 md:mb-8">
            <img 
              src={`/lovable-uploads/ec02a72f-07df-475a-8b39-d8bd5c5b91d3.png`}
              alt="Cross-Punched Product Boxes" 
              className="w-full h-auto"
            />
            
            {/* Buy Now Button positioned over the image */}
            <div className="absolute bottom-2 md:bottom-4 left-1/2 transform -translate-x-1/2">
              <Button 
                className="bg-yellow-400 text-black hover:bg-yellow-500 px-4 md:px-8 py-2 md:py-3 rounded-lg font-semibold text-sm md:text-lg"
              >
                Buy Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Not Your Typical BINGO Section */}
      <section className="py-8 md:py-16 px-4 bg-gray-50">
        <div className="container mx-auto text-center">
          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mb-6 md:mb-8">
            <div className="w-2 h-2 md:w-3 md:h-3 bg-green-600 rounded-full"></div>
            <div className="w-2 h-2 md:w-3 md:h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-2 h-2 md:w-3 md:h-3 bg-yellow-400 rounded-full"></div>
            <div className="w-4 h-4 md:w-6 md:h-6 border-2 border-red-600 rounded-full"></div>
          </div>

          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-2 md:mb-4">
            Not Your Typical <span className="text-red-600">BINGO!</span>
          </h2>
          
          <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-8 md:mb-12 max-w-md mx-auto">
            "Think. Solve. Evolve."
          </p>

          {/* Features Grid - Responsive */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="mb-2 md:mb-4">
                  <div className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 mx-auto bg-yellow-100 rounded-full flex items-center justify-center">
                    <div className="w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-yellow-400 rounded-full"></div>
                  </div>
                </div>
                <h3 className="text-sm md:text-lg lg:text-xl font-semibold">{feature.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross Out Boring Parties Section */}
      <section className="relative py-12 md:py-16 px-4 bg-cover bg-center" 
               style={{
                 backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/lovable-uploads/b5bf1530-29e1-4a20-97b1-f63be758b059.png')`
               }}>
        <div className="container mx-auto text-center text-white">
          <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-8 md:mb-12 tracking-wide">
            CROSS OUT BORING PARTIES
          </h2>
          
          <Button 
            className="bg-white text-black hover:bg-gray-100 px-6 md:px-8 py-2 md:py-3 rounded-lg font-semibold text-base md:text-lg"
          >
            Know More
          </Button>
        </div>
      </section>

      {/* Back to Top Button */}
      <button className="fixed bottom-6 md:bottom-8 right-6 md:right-8 w-10 h-10 md:w-12 md:h-12 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center text-white transition-colors z-10">
        <span className="text-lg md:text-xl">↑</span>
      </button>
    </div>
  );
};

export default Home;
