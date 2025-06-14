
const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* About Us Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-8" style={{ color: '#7FB069' }}>
              About Us
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Bright Bulb Labs is where learning meets fun—with games, events, and content that get Gen Z thinking, 
              questioning, and talking. We bring real-world topics to life in ways that actually stick.
            </p>
          </div>

          {/* Team/Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="bg-gray-400 rounded-lg h-48 hover:bg-gray-500 transition-colors"
              >
                {/* Placeholder for team member or feature content */}
              </div>
            ))}
          </div>
        </div>

        {/* Back to Top Button */}
        <button className="fixed bottom-8 right-8 w-12 h-12 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center text-white transition-colors">
          <span className="text-xl">↑</span>
        </button>
      </div>
    </div>
  );
};

export default About;
