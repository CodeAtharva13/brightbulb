
import { useState, useEffect } from 'react';
import WriteReviewSection from './WriteReviewSection';

const ReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      name: "Priya Sharma",
      rating: 5,
      text: "Absolutely loved playing Cross-Punched with my family! The game brought us all together and we had so much fun. Perfect for bonding time.",
      avatar: "PS"
    },
    {
      id: 2,
      name: "Rahul Patel",
      rating: 5,
      text: "Bought this for my daughter's birthday party and it was a massive hit! All the kids were engaged and having a blast.",
      avatar: "RP"
    },
    {
      id: 3,
      name: "Anita Desai",
      rating: 5,
      text: "What a refreshing twist on traditional games! Cross-Punched kept everyone entertained for hours. Highly recommend for family gatherings.",
      avatar: "AD"
    },
    {
      id: 4,
      name: "Vikram Singh",
      rating: 5,
      text: "Great quality and amazing concept! We played during our weekend getaway and it made the trip so much more fun.",
      avatar: "VS"
    },
    {
      id: 5,
      name: "Meera Iyer",
      rating: 5,
      text: "Fast delivery and excellent packaging! The game exceeded our expectations. Perfect for bringing people together.",
      avatar: "MI"
    },
    {
      id: 6,
      name: "Arjun Kapoor",
      rating: 5,
      text: "Innovative game design! We've played multiple rounds and it never gets boring. Great for parties and family time.",
      avatar: "AK"
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
