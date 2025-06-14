
import { Button } from "@/components/ui/button";

const CrossPunched = () => {
  const handleBuyNow = () => {
    // Add your buy now functionality here
    console.log("Buy Now clicked!");
  };

  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <img 
        src="/lovable-uploads/be1e48ef-1d1b-4898-be79-7036ea686a8b.png" 
        alt="Cross-Punched - Not Your Typical BINGO" 
        className="w-full h-full object-cover"
      />
      
      {/* Clickable Buy Now Button positioned over the image button */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
        <Button 
          onClick={handleBuyNow}
          className="bg-red-600 hover:bg-red-700 text-white px-12 py-4 text-xl font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Buy Now
        </Button>
      </div>
    </div>
  );
};

export default CrossPunched;
