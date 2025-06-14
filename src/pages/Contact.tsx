
import { useState } from 'react';
import { Button } from "@/components/ui/button";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: `url('/lovable-uploads/c4fb4eba-547c-41b0-ba61-bcc247c1449a.png')`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-lg mx-auto bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Phone Number Input */}
              <div>
                <input
                  type="tel"
                  name="email"
                  placeholder="Phone no."
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-2xl focus:outline-none focus:border-blue-500 focus:ring-0 transition-colors bg-gray-50 placeholder-gray-500"
                  required
                />
              </div>

              {/* Subject Input */}
              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-2xl focus:outline-none focus:border-blue-500 focus:ring-0 transition-colors bg-gray-50 placeholder-gray-500"
                  required
                />
              </div>

              {/* Message Textarea */}
              <div>
                <textarea
                  name="message"
                  placeholder="Enter your text here....."
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-2xl focus:outline-none focus:border-blue-500 focus:ring-0 transition-colors bg-gray-50 placeholder-gray-500 resize-vertical"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="text-center pt-4">
                <Button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-12 py-4 text-xl rounded-2xl shadow-lg font-semibold transition-all duration-200 transform hover:scale-105"
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button className="fixed bottom-8 right-8 w-12 h-12 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center text-white transition-colors z-20">
        <span className="text-xl">↑</span>
      </button>
    </div>
  );
};

export default Contact;
