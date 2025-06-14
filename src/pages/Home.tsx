
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

const Home = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  useEffect(() => {
    if (emblaApi) {
      const autoScroll = setInterval(() => {
        emblaApi.scrollNext();
      }, 3000); // Auto scroll every 3 seconds

      return () => clearInterval(autoScroll);
    }
  }, [emblaApi]);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Auto-scrolling Carousel Section */}
      <div className="relative min-h-[80vh] flex items-center justify-center">
        <Carousel ref={emblaRef} className="w-full max-w-6xl">
          <CarouselContent>
            <CarouselItem>
              <div className="flex items-center justify-center cursor-pointer hover:opacity-95 transition-opacity" onClick={() => console.log('Cross-Punched Out Now clicked')}>
                <img 
                  src="/lovable-uploads/c3718adf-d182-40f7-ab60-523af46fb0e1.png" 
                  alt="Cross-Punched Out Now! - Game boxes display" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="flex items-center justify-center cursor-pointer hover:opacity-95 transition-opacity" onClick={() => console.log('Punched-Up clicked')}>
                <img 
                  src="/lovable-uploads/9bf8fb40-5c4c-412e-a774-7422b4fc3ed5.png" 
                  alt="Catch Up with Punched-Up!" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="flex items-center justify-center cursor-pointer hover:opacity-95 transition-opacity" onClick={() => console.log('Spark-Flame-Blaze clicked')}>
                <img 
                  src="/lovable-uploads/484941f8-16e0-41b8-bf19-bfe3b392d3c9.png" 
                  alt="Spark-Flame-Blaze Out Now!" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
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

      {/* Third Image Section - Clickable */}
      <div className="bg-gray-100 cursor-pointer hover:opacity-95 transition-opacity" onClick={() => console.log('Know More clicked')}>
        <img 
          src="/lovable-uploads/1e6cc659-9907-4c87-a8dd-88516b12a1cb.png" 
          alt="Cross Out Boring Parties - Know More" 
          className="w-full h-auto block"
        />
      </div>

      {/* Back to Top Button */}
      <button className="fixed bottom-8 right-8 w-12 h-12 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center text-white transition-colors">
        <span className="text-xl">↑</span>
      </button>
    </div>
  );
};

export default Home;
