
import { Button } from "@/components/ui/button";
import ReviewsSection from "@/components/ReviewsSection";

const Timeline = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="w-full">
        <img 
          src="/lovable-uploads/1172e698-dd67-4efc-aff2-859bcb81bd91.png" 
          alt="Bright Bulb Labs Timeline - Light Bulb Moment to Punched Up!" 
          className="w-full h-auto block"
          style={{ imageRendering: 'crisp-edges' }}
        />
      </div>

      <div className="w-full">
        <img 
          src="/lovable-uploads/c133f418-03b6-474a-bacf-6c3ea861ed33.png" 
          alt="Punched Up! - July 10, 8 PM, Hippie at heart, Kothrud" 
          className="w-full h-auto block"
          style={{ imageRendering: 'crisp-edges' }}
        />
      </div>

      {/* Timeline Events Section */}
      <div className="bg-white py-12 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* First Spotlight Event */}
            <div className="text-center group">
              <h3 className="text-2xl font-bold text-red-600 mb-4 cursor-pointer">
                First Spotlight Event: 11.11 Flea
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                The debut event by Bright Bulb Labs, at the 11.11 Flea, introduces an immersive experience blending creativity, wit, and commerce.
              </p>
            </div>

            {/* Punched Up */}
            <div className="text-center group">
              <h3 className="text-2xl font-bold text-red-600 mb-4 cursor-pointer">
                Punched Up!
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                A clue-based bingo night, our very first event. With over 75 attendees and an incredible response, this marked the launch of our game — Cross Punched.
              </p>
            </div>

            {/* Flea 11:11 */}
            <div className="text-center group">
              <h3 className="text-2xl font-bold text-red-600 mb-4 cursor-pointer">
                Flea 11:11
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                The second showcase by Bright Bulb Labs at the 11.11 Flea showcased our flagship product Cross Punched through an immersive, witty,
              </p>
            </div>

            {/* Punched Up 2 */}
            <div className="text-center group">
              <h3 className="text-2xl font-bold text-red-600 mb-4 cursor-pointer">
                Punched Up 2
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Punched Up made a comeback on 10th July at Hippie at Heart, Kothrud, a clue-cracking, pop culture-fuelled bingo night hosted by the sharp-witted Naman Jain.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* New images with hover zoom effect */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        <div className="overflow-hidden rounded-lg">
          <img 
            src="/lovable-uploads/2ab63637-e441-4506-a595-4ef1f65b82d3.png" 
            alt="Event Photo 1" 
            className="w-full h-auto block transition-transform duration-300 hover:scale-105"
          />
        </div>
        
        <div className="overflow-hidden rounded-lg">
          <img 
            src="/lovable-uploads/3cfe7836-9c02-420c-a7be-a645585e52e6.png" 
            alt="Event Photo 2" 
            className="w-full h-auto block transition-transform duration-300 hover:scale-105"
          />
        </div>
        
        <div className="overflow-hidden rounded-lg">
          <img 
            src="/lovable-uploads/743b1d76-33b5-4998-8877-c5079d91bc51.png" 
            alt="Event Photo 3" 
            className="w-full h-auto block transition-transform duration-300 hover:scale-105"
          />
        </div>
        
        <div className="overflow-hidden rounded-lg">
          <img 
            src="/lovable-uploads/bddf3b1f-029d-4622-b9b7-a5b17ad0cc12.png" 
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
    </div>
  );
};

export default Timeline;
