
import { useNavigate } from "react-router-dom";

const CrossPunched = () => {
  const navigate = useNavigate();

  const handleImageClick = () => {
    // You can change this URL to wherever you want to redirect
    window.open('https://example.com', '_blank');
    // Or use navigate('/some-route') for internal routing
  };

  return (
    <div className="min-h-screen relative">
      {/* Clickable Background Image */}
      <img 
        src="/lovable-uploads/be1e48ef-1d1b-4898-be79-7036ea686a8b.png" 
        alt="Cross-Punched - Not Your Typical BINGO" 
        className="w-full h-full object-cover cursor-pointer hover:opacity-95 transition-opacity"
        onClick={handleImageClick}
      />
    </div>
  );
};

export default CrossPunched;
