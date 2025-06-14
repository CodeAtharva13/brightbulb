
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <img 
                  src="/lovable-uploads/76e13aa2-6e74-4f74-92d9-b639deef6a19.png" 
                  alt="Instagram" 
                  className="w-5 h-5"
                />
                brightbulblabs.in
              </li>
              <li className="flex items-center gap-2">
                <img 
                  src="/lovable-uploads/e605f6de-a080-4cd7-919a-6656e0f7416e.png" 
                  alt="LinkedIn" 
                  className="w-5 h-5"
                />
                LinkedIn
              </li>
              <li className="flex items-center gap-2">
                <img 
                  src="/lovable-uploads/deabca3d-10af-448e-92ea-c600288e85e0.png" 
                  alt="WhatsApp" 
                  className="w-5 h-5"
                />
                WhatsApp
              </li>
              <li>Email ID - chaitrasworkid@gmail.com</li>
              <li>Address - BrightBulbLabs, Shukrawar Peth, Pune.</li>
            </ul>
          </div>

          {/* Navigation Links */}
          <div>
            <div className="space-y-2">
              <Link to="/" className="block text-lg font-semibold hover:text-yellow-400 transition-colors">
                Home
              </Link>
              <Link to="/timeline" className="block text-lg font-semibold hover:text-yellow-400 transition-colors">
                Time-Line
              </Link>
              <Link to="/cross-punched" className="block text-lg font-semibold hover:text-yellow-400 transition-colors">
                Crossed-Punched
              </Link>
              <Link to="/about" className="block text-lg font-semibold hover:text-yellow-400 transition-colors">
                About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
