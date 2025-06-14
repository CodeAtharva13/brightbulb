
const About = () => {
  const teamImages = [
    "/lovable-uploads/69e512c0-ef2a-4a2b-a05a-3622de545a28.png",
    "/lovable-uploads/69e512c0-ef2a-4a2b-a05a-3622de545a28.png",
    "/lovable-uploads/69e512c0-ef2a-4a2b-a05a-3622de545a28.png",
    "/lovable-uploads/69e512c0-ef2a-4a2b-a05a-3622de545a28.png"
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* About Us Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-8" style={{ color: '#9DD3C0' }}>
              About Us
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Bright Bulb Labs is where learning meets fun—with games, events, and content that get Gen Z thinking, 
              questioning, and talking. We bring real-world topics to life in ways that actually stick.
            </p>
          </div>

          {/* Team/Feature Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamImages.map((image, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img 
                  src={image} 
                  alt={`Team member ${index + 1}`}
                  className="w-full h-48 object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Back to Top Button */}
        <button className="fixed bottom-8 right-8 w-12 h-12 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center text-white transition-colors z-50">
          <span className="text-xl">↑</span>
        </button>
      </div>
    </div>
  );
};

export default About;
