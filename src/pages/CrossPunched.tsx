
import { useNavigate } from "react-router-dom";

const CrossPunched = () => {
  const navigate = useNavigate();

  const handleImageClick = () => {
    // You can change this URL to wherever you want to redirect
    window.open('https://example.com', '_blank');
    // Or use navigate('/some-route') for internal routing
  };

  return (
    <div className="min-h-screen">
      {/* Clickable Background Image */}
      <img 
        src="/lovable-uploads/be1e48ef-1d1b-4898-be79-7036ea686a8b.png" 
        alt="Cross-Punched - Not Your Typical BINGO" 
        className="w-full h-full object-cover cursor-pointer hover:opacity-95 transition-opacity"
        onClick={handleImageClick}
      />
      
      {/* New section below */}
      <div className="w-full">
        <img 
          src="/lovable-uploads/3c8bf824-f9cd-4b61-8a28-afc0214e32a4.png" 
          alt="What is Cross-Punched? - Game description" 
          className="w-full h-auto block"
        />
      </div>

      {/* Additional game examples */}
      <div className="w-full">
        <img 
          src="/lovable-uploads/42ee9122-0758-4dbf-b0f1-43f9a016daea.png" 
          alt="Cross-Punched game example with Nike card" 
          className="w-full h-auto block"
        />
      </div>

      <div className="w-full">
        <img 
          src="/lovable-uploads/c1acdaf2-c2f8-43d6-81a9-b87b8936f12b.png" 
          alt="Cross-Punched game examples with multiple cards" 
          className="w-full h-auto block"
        />
      </div>

      <div className="w-full">
        <img 
          src="/lovable-uploads/1752119e-c2c6-4ec0-b6dd-8dffa8837349.png" 
          alt="Cross-Punched completed game board" 
          className="w-full h-auto block"
        />
      </div>
    </div>
  );
};

export default CrossPunched;
