
const About = () => {
  const teamImages = [
    "/lovable-uploads/e7270a84-1e9c-4678-b9a5-d78c2706f9c1.png",
    "/lovable-uploads/9e5bcf07-214f-4e7e-a999-55c59b446100.png",
    "/lovable-uploads/9604be40-7c2b-4d6d-b890-87438d99e6b3.png",
    "/lovable-uploads/dc19569e-0c53-445f-8720-2447d4997de7.png",
    "/lovable-uploads/276b3fd7-fe73-44cd-91d2-a1762147eaf9.png",
    "/lovable-uploads/cdd4f88a-4bf8-4283-8b66-2e475d0ca905.png"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-pink-100 flex items-center justify-center py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-12" style={{ color: '#7FB069' }}>
            About Us
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto font-medium mb-16">
            Bright Bulb Labs is where learning meets fun—with games, events, and content that get Gen Z thinking, 
            questioning, and talking. We bring real-world topics to life in ways that actually stick.
          </p>

          {/* Team Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {teamImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <img
                  src={image}
                  alt={`Team member ${index + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
