
import { useState, useEffect } from 'react';
import WriteReviewSection from './WriteReviewSection';

const ReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      text: "Amazing game! Cross-Punched is so much more fun than regular BINGO. The trivia questions are challenging and entertaining!",
      avatar: "SJ"
    },
    {
      id: 2,
      name: "Mike Chen",
      rating: 5,
      text: "Bought this for family game night and it was a huge hit! Everyone from kids to grandparents had a blast.",
      avatar: "MC"
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      rating: 5,
      text: "Perfect for parties! The cross-punched format adds such a unique twist. Highly recommend!",
      avatar: "ER"
    },
    {
      id: 4,
      name: "David Thompson",
      rating: 5,
      text: "Incredible game design! The combination of BINGO and trivia is genius. Can't wait to play again!",
      avatar: "DT"
    },
    {
      id: 5,
      name: "Lisa Park",
      rating: 5,
      text: "Best purchase I've made in a while! Hours of entertainment and learning rolled into one game.",
      avatar: "LP"
    },
    {
      id: 6,
      name: "James Wilson",
      rating: 5,
      text: "Outstanding quality and so much fun! The trivia questions are well-researched and engaging.",
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
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-8 rounded-2xl">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl transition-all duration-500 ease-in-out ${
            isAnimating ? 'opacity-70 transform scale-95' : 'opacity-100 transform scale-100'
          }`}>
            {getVisibleReviews().map((review, index) => (
              <div
                key={`${review.id}-${currentIndex}-${index}`}
                className={`bg-white rounded-xl shadow-lg p-6 transform transition-all duration-700 ease-out ${
                  index === 1 ? 'scale-105 shadow-xl border-2 border-blue-200' : 'hover:scale-102'
                } ${isAnimating ? 'translate-y-2' : 'translate-y-0'}`}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
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
                  ? 'bg-blue-500'
                  : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        {/* Direction indicator */}
        <div className="flex justify-center mt-4">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <span className={`transition-all duration-300 ${direction === 1 ? 'text-blue-500' : ''}`}>
              →
            </span>
            <span>Auto-scrolling</span>
            <span className={`transition-all duration-300 ${direction === -1 ? 'text-blue-500' : ''}`}>
              ←
            </span>
          </div>
        </div>

        {/* Write a Review Section */}
        <WriteReviewSection />
      </div>
    </div>
  );
};

export default ReviewsSection;
