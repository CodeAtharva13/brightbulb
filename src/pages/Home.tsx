
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Home = () => {
  const bingo_features = [
    {
      icon: "🤔",
      title: "Think",
      description: "Critical thinking challenges"
    },
    {
      icon: "🔍",
      title: "Solve", 
      description: "Problem-solving activities"
    },
    {
      icon: "🌱",
      title: "Grow",
      description: "Personal development"
    },
    {
      icon: "🏆",
      title: "Win",
      description: "Achievement rewards"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="bg-black text-white py-16 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 uppercase tracking-wider">
                CROSS-PUNCHED OUT NOW!
              </h1>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative">
                <img 
                  src="/lovable-uploads/da774e96-38de-4f00-ba7c-3453cb602edc.png" 
                  alt="Cross-Punched Game Boxes"
                  className="max-w-full h-auto"
                />
                <Button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-black hover:bg-gray-200 px-8 py-3 font-semibold">
                  Buy Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center py-4 bg-gray-100">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-300 rounded-full"></div>
        </div>
      </div>

      {/* Not Your Typical BINGO Section */}
      <div className="bg-gray-100 py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Not Your Typical <span className="text-red-600">BINGO!</span>
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-md mx-auto">
            "Think. Solve. Evolve."
          </p>

          {/* Features Carousel/Grid */}
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {bingo_features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-yellow-400 rounded-full flex items-center justify-center text-2xl">
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Cross Out Boring Parties Section */}
      <div className="bg-black text-white py-16 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1">
              <img 
                src="/lovable-uploads/9e464011-7b8f-48ad-9123-680545351f47.png" 
                alt="Cross-Punched Game Setup"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 uppercase tracking-wider">
                CROSS OUT BORING PARTIES
              </h2>
              <Button className="bg-white text-black hover:bg-gray-200 px-8 py-3 font-semibold">
                Know More
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button className="fixed bottom-8 right-8 w-12 h-12 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center text-white transition-colors z-50">
        <span className="text-xl">↑</span>
      </button>
    </div>
  );
};

export default Home;
