
import { useState } from 'react';
import { Button } from "@/components/ui/button";

const Contact = () => {
  const [formData, setFormData] = useState({
    phone: '',
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
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 to-orange-200 relative overflow-hidden">
      {/* Background with colorful cards */}
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/b0ba57a8-4248-4827-a842-db930b259feb.png"
          alt="Background"
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-md">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Phone Number Input */}
            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone no."
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-6 py-4 text-lg bg-white/90 backdrop-blur-sm border-2 border-gray-300 rounded-2xl focus:outline-none focus:border-blue-400 focus:ring-0 transition-all placeholder-gray-500 shadow-sm"
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
                className="w-full px-6 py-4 text-lg bg-white/90 backdrop-blur-sm border-2 border-gray-300 rounded-2xl focus:outline-none focus:border-blue-400 focus:ring-0 transition-all placeholder-gray-500 shadow-sm"
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
                rows={4}
                className="w-full px-6 py-4 text-lg bg-white/90 backdrop-blur-sm border-2 border-gray-300 rounded-2xl focus:outline-none focus:border-blue-400 focus:ring-0 transition-all placeholder-gray-500 shadow-sm resize-none"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <Button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-4 text-xl rounded-2xl shadow-lg font-semibold transition-all duration-200 transform hover:scale-[1.02]"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
