
const Timeline = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="w-full">
        <img 
          src="/lovable-uploads/47875041-d299-4ff7-896d-b3f70703c97e.png" 
          alt="Bright Bulb Labs Timeline - Light Bulb Moment to Punched Up!" 
          className="w-full h-auto block"
          style={{ imageRendering: 'crisp-edges' }}
        />
      </div>

      <div className="w-full">
        <img 
          src="/lovable-uploads/820f797c-71cc-426a-aa59-a12f2d0cc1a2.png" 
          alt="Punched Up! - Event description" 
          className="w-full h-auto block"
          style={{ imageRendering: 'crisp-edges' }}
        />
      </div>

      {/* Back to Top Button */}
      <button className="fixed bottom-8 right-8 w-12 h-12 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center text-white transition-colors">
        <span className="text-xl">↑</span>
      </button>
    </div>
  );
};

export default Timeline;
