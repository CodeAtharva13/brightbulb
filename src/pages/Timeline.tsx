
import { Button } from "@/components/ui/button";
import ReviewsSection from "@/components/ReviewsSection";

const Timeline = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="w-full">
        <img 
          src="/lovable-uploads/47875041-d299-4ff7-896d-b3f70703c97e.png" 
          alt="Bright Bulb Labs Timeline - Light Bulb Moment to Punched Up!" 
          className="w-full h-auto block"
          style={{ imageRendering: 'crisp-edges' }}
        />
      </div>

      <div className="w-full">
        <img 
          src="/lovable-uploads/820f797c-71cc-426a-aa59-a12f2d0cc1a2.png" 
          alt="Punched Up! - Event description" 
          className="w-full h-auto block"
          style={{ imageRendering: 'crisp-edges' }}
        />
      </div>

      {/* New images with hover zoom effect */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        <div className="overflow-hidden rounded-lg">
          <img 
            src="/lovable-uploads/4dbe2002-8be1-40d3-95ba-81c8627666dd.png" 
            alt="Event Photo 1" 
            className="w-full h-auto block transition-transform duration-300 hover:scale-105"
          />
        </div>
        
        <div className="overflow-hidden rounded-lg">
          <img 
            src="/lovable-uploads/2a150270-a70a-4376-b290-3179770a2f6c.png" 
            alt="Event Photo 2" 
            className="w-full h-auto block transition-transform duration-300 hover:scale-105"
          />
        </div>
        
        <div className="overflow-hidden rounded-lg">
          <img 
            src="/lovable-uploads/01507e52-28eb-4e10-a429-7ac6fa6e02e1.png" 
            alt="Event Photo 3" 
            className="w-full h-auto block transition-transform duration-300 hover:scale-105"
          />
        </div>
        
        <div className="overflow-hidden rounded-lg">
          <img 
            src="/lovable-uploads/c67322cd-0999-49be-a6e6-a402a01d5de1.png" 
            alt="Event Photo 4" 
            className="w-full h-auto block transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>

      {/* Subscribe Now Button */}
      <div className="flex justify-center py-8">
        <Button 
          className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-8 py-3 text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          Subscribe Now
        </Button>
      </div>

      {/* Additional text below button */}
      <div className="flex justify-center pb-4">
        <p className="text-gray-600 text-lg">Keep up with our upcoming events!</p>
      </div>

      {/* Hear it from our visitors image */}
      <div className="w-full">
        <img 
          src="/lovable-uploads/d971a5fd-73cf-439a-a203-37e56666b9fd.png" 
          alt="Hear it from our visitors" 
          className="w-full h-auto block"
          style={{ imageRendering: 'crisp-edges' }}
        />
      </div>

      {/* Reviews Section */}
      <ReviewsSection />

      {/* Back to Top Button */}
      <button className="fixed bottom-8 right-8 w-12 h-12 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center text-white transition-colors">
        <span className="text-xl">↑</span>
      </button>
    </div>
  );
};

export default Timeline;
