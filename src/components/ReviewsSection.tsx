
import { useState, useEffect } from 'react';

const ReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      text: "Amazing event! The comedy was top-notch and the atmosphere was electric. Can't wait for the next one!",
      avatar: "SJ"
    },
    {
      id: 2,
      name: "Mike Chen",
      rating: 5,
      text: "Punched Up! delivered beyond expectations. Great laughs, wonderful crowd, and fantastic organization.",
      avatar: "MC"
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      rating: 5,
      text: "The best comedy night in town! Professional comedians and such a fun venue. Highly recommend!",
      avatar: "ER"
    },
    {
      id: 4,
      name: "David Thompson",
      rating: 5,
      text: "Incredible experience! The energy was contagious and the comedy was absolutely hilarious.",
      avatar: "DT"
    },
    {
      id: 5,
      name: "Lisa Park",
      rating: 5,
      text: "Perfect night out! Great comedy, amazing crowd, and the venue was fantastic. Will definitely be back!",
      avatar: "LP"
    },
    {
      id: 6,
      name: "James Wilson",
      rating: 5,
      text: "Outstanding event! The comedians were brilliant and the whole experience was unforgettable.",
      avatar: "JW"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      
      setTimeout(() => {
        setCurrentIndex(prev => {
          let newIndex;
          if (direction === 1) {
            newIndex = prev + 1;
            if (newIndex >= reviews.length - 2) {
              setDirection(-1);
            }
          } else {
            newIndex = prev - 1;
            if (newIndex <= 0) {
              setDirection(1);
            }
          }
          return Math.max(0, Math.min(newIndex, reviews.length - 3));
        });
        setIsAnimating(false);
      }, 150);
    }, 3000);

    return () => clearInterval(interval);
  }, [direction, reviews.length]);

  const getVisibleReviews = () => {
    const visibleReviews = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % reviews.length;
      visibleReviews.push(reviews[index]);
    }
    return visibleReviews;
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ★
      </span>
    ));
  };

  return (
    <div className="bg-gradient-to-r from-purple-50 to-pink-50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl transition-all duration-500 ease-in-out ${
            isAnimating ? 'opacity-70 transform scale-95' : 'opacity-100 transform scale-100'
          }`}>
            {getVisibleReviews().map((review, index) => (
              <div
                key={`${review.id}-${currentIndex}-${index}`}
                className={`bg-white rounded-xl shadow-lg p-6 transform transition-all duration-700 ease-out ${
                  index === 1 ? 'scale-105 shadow-xl border-2 border-pink-200' : 'hover:scale-102'
                } ${isAnimating ? 'translate-y-2' : 'translate-y-0'}`}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    {review.avatar}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{review.name}</h3>
                    <div className="flex">{renderStars(review.rating)}</div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed italic">
                  "{review.text}"
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Progress indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {reviews.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index >= currentIndex && index < currentIndex + 3
                  ? 'bg-pink-500'
                  : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        {/* Direction indicator */}
        <div className="flex justify-center mt-4">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <span className={`transition-all duration-300 ${direction === 1 ? 'text-pink-500' : ''}`}>
              →
            </span>
            <span>Auto-scrolling</span>
            <span className={`transition-all duration-300 ${direction === -1 ? 'text-pink-500' : ''}`}>
              ←
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;
