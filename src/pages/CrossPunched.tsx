
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";

const CrossPunched = () => {
  const [showAnswers, setShowAnswers] = useState(false);

  const triviaData = [
    {
      category: "Filmfare",
      content: 'Filmfare: Often called the "Indian Oscars," Filmfare has celebrated Bollywood\'s finest since 1954, with winners receiving the iconic Black Lady statuette. It\'s a reminder of cinema\'s power to inspire and entertain generations.',
      bgColor: "bg-green-200"
    },
    {
      category: "Tony Stark",
      content: "With his cutting-edge suit and sharp wit, Tony Stark became the backbone of the MCU, setting the stage for a new era of superhero films.",
      bgColor: "bg-green-300"
    },
    {
      category: "Falsetto",
      content: "Falsetto: A vocal technique that lets male singers hit high notes beyond their natural range. From opera to pop, falsetto adds emotion and depth, making music more expressive.",
      bgColor: "bg-green-400"
    },
    {
      category: "Dadasaheb Phalke",
      content: 'Dadasaheb Phalke: Known as the "Father of Indian Cinema," he directed *Raja Harishchandra* (1913), India\'s first full-length feature film.',
      bgColor: "bg-green-500"
    },
    {
      category: "Titanic",
      content: "Titanic: The 1997 James Cameron film was the highest-grossing movie ever until *Avatar* surpassed it; adjusted for inflation, it still ranks at the top.",
      bgColor: "bg-green-600"
    },
    {
      category: "Elvis Presley",
      content: 'Elvis Presley: The "King of Rock and Roll," he revolutionized music with hits like *Jailhouse Rock* and *Can\'t Help Falling in Love*, influencing generations of artists.',
      bgColor: "bg-green-700"
    },
    {
      category: "Satyajit Ray",
      content: "Satyajit Ray: The legendary Indian filmmaker who created the Apu Trilogy and became India's first Oscar winner with an Honorary Academy Award.",
      bgColor: "bg-yellow-300"
    },
    {
      category: "Quentin Tarantino",
      content: "Quentin Tarantino: A director known for his unique storytelling, nonlinear narratives, and cult classics like Pulp Fiction, Kill Bill, and Inglourious Basterds.",
      bgColor: "bg-yellow-400"
    },
    {
      category: "Queen",
      content: "Queen: A British rock band led by Freddie Mercury, famous for anthems like We Will Rock You, Bohemian Rhapsody, and Another One Bites the Dust.",
      bgColor: "bg-yellow-500"
    }
  ];

  const triviaSets = [
    { name: "SET 1", color: "bg-green-300" },
    { name: "SET 2", color: "bg-green-500" },
    { name: "SET 3", color: "bg-yellow-400" },
    { name: "SET 4", color: "bg-yellow-600" },
    { name: "SET 5", color: "bg-red-400" },
    { name: "SET 6", color: "bg-red-600" }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sets Grid Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
            {triviaSets.map((set, index) => (
              <div
                key={index}
                className={`${set.color} rounded-lg p-8 text-center hover:scale-105 transition-transform cursor-pointer`}
              >
                <h3 className="text-2xl font-bold text-white">{set.name}</h3>
              </div>
            ))}
          </div>

          {/* Buy Now Button */}
          <div className="text-center mb-16">
            <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg rounded-lg shadow-lg">
              Buy Now
            </Button>
          </div>
        </div>
      </div>

      {/* Trivia Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Answer Key Toggle */}
            <div className="text-center mb-8">
              <button
                onClick={() => setShowAnswers(!showAnswers)}
                className="flex items-center justify-center gap-2 mx-auto text-lg font-semibold text-gray-700 hover:text-yellow-600 transition-colors border-b-2 border-gray-700 hover:border-yellow-600 pb-1"
              >
                Answer Key
                <ChevronDown className={`w-5 h-5 transition-transform ${showAnswers ? 'rotate-180' : ''}`} />
              </button>
            </div>

            {/* Trivia Title */}
            <h2 className="text-6xl font-bold text-center mb-16" style={{ color: '#2D5016' }}>
              Trivia
            </h2>

            {/* Trivia Cards */}
            {showAnswers && (
              <div className="space-y-6">
                {triviaData.map((item, index) => (
                  <div
                    key={index}
                    className={`${item.bgColor} rounded-lg p-6 hover:shadow-lg transition-shadow`}
                  >
                    <h3 className="text-xl font-bold text-center mb-4" style={{ color: '#2D5016' }}>
                      {item.category}
                    </h3>
                    <p className="text-gray-800 text-center leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button className="fixed bottom-8 right-8 w-12 h-12 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center text-white transition-colors">
        <span className="text-xl">↑</span>
      </button>
    </div>
  );
};

export default CrossPunched;
