
const Timeline = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-full mx-auto flex items-center justify-center">
          <img 
            src="/lovable-uploads/47875041-d299-4ff7-896d-b3f70703c97e.png" 
            alt="Bright Bulb Labs Timeline - Light Bulb Moment to Punched Up!" 
            className="max-w-full h-auto"
          />
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
