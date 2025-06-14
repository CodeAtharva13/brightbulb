import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/f53e8206-f7e6-46b1-b1f4-c0de66007464.png" 
              alt="bright bulb labs logo" 
              className="h-12 w-auto"
            />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/') ? 'text-yellow-500 border-b-2 border-yellow-500 pb-1' : 'text-foreground'
              }`}
            >
              Home
            </Link>
            <Link
              to="/timeline"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/timeline') ? 'text-yellow-500 border-b-2 border-yellow-500 pb-1' : 'text-foreground'
              }`}
            >
              Timeline
            </Link>
            <Link
              to="/cross-punched"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/cross-punched') ? 'text-yellow-500 border-b-2 border-yellow-500 pb-1' : 'text-foreground'
              }`}
            >
              Cross-Punched
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/about') ? 'text-yellow-500 border-b-2 border-yellow-500 pb-1' : 'text-foreground'
              }`}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/contact') ? 'text-yellow-500 border-b-2 border-yellow-500 pb-1' : 'text-foreground'
              }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Social Icons */}
          <div className="flex items-center space-x-4">
            <a href="#" className="w-8 h-8 bg-pink-500 rounded-md flex items-center justify-center hover:bg-pink-600 transition-colors">
              <span className="text-white text-xs font-bold">IG</span>
            </a>
            <a href="#" className="w-8 h-8 bg-green-500 rounded-md flex items-center justify-center hover:bg-green-600 transition-colors">
              <span className="text-white text-xs font-bold">WA</span>
            </a>
            <a href="#" className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center hover:bg-blue-700 transition-colors">
              <span className="text-white text-xs font-bold">LI</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
