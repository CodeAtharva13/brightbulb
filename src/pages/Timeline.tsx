
const Timeline = () => {
  const timelineEvents = [
    {
      title: "Light Bulb Moment",
      date: "August 2024",
      icon: "💡",
      color: "yellow"
    },
    {
      title: "Bright Bulb Labs Goes Live!",
      date: "December 2024",
      icon: "✈️",
      color: "blue"
    },
    {
      title: "First Spotlight Event: 11.11 Flea",
      date: "January 2025",
      icon: "💡",
      color: "pink"
    },
    {
      title: "Punched Up!",
      date: "April 2025",
      icon: "💡",
      color: "green"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Timeline Events */}
          <div className="relative">
            {timelineEvents.map((event, index) => (
              <div key={index} className="relative mb-16 last:mb-0">
                {/* Timeline Line */}
                {index < timelineEvents.length - 1 && (
                  <div className="absolute left-1/2 top-24 w-0.5 h-32 bg-gray-300 transform -translate-x-1/2 hidden md:block"></div>
                )}
                
                {/* Event Card */}
                <div className={`relative ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'} w-full md:w-1/2`}>
                  <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                    {/* Icon */}
                    <div className="flex items-center justify-center w-16 h-16 bg-yellow-400 rounded-full mb-4 mx-auto md:mx-0">
                      <span className="text-2xl">{event.icon}</span>
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-bold text-red-600 mb-2 text-center md:text-left">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 font-medium text-center md:text-left">
                      {event.date}
                    </p>
                  </div>
                </div>

                {/* Center Icon for Desktop */}
                <div className="absolute left-1/2 top-8 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center transform -translate-x-1/2 hidden md:flex">
                  <span className="text-xl">{event.icon}</span>
                </div>
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

export default Timeline;
