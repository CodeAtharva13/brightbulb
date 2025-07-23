import { useState } from 'react';
import { Button } from "@/components/ui/button";

const Contact = () => {
  const [formData, setFormData] = useState({
    phone: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{type: 'success' | 'error', message: string} | null>(null);

  // Replace this URL with your actual Google Apps Script Web App URL
  const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbziZKbXehZsp77xw7x1NndQKqQNGQCuAUg4qjkAcPFayT1PbrB5pmPIX4-XGLrMnGHlKA/exec';

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain',
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({ type: 'success', message: 'Thank you! Your message has been sent successfully.' });
        setFormData({ phone: '', subject: '', message: '' }); // Reset form
      } else {
        setSubmitStatus({ type: 'error', message: result.message || 'Something went wrong. Please try again.' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({ type: 'error', message: 'Network error. Please check your connection and try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 to-orange-200 flex flex-col items-center justify-center p-4 gap-8">
      {/* Existing image */}
      <div className="grid place-items-center">
        <img 
          src="/lovable-uploads/c6210870-ca22-41ef-baf1-8e8a651b2529.png"
          alt="Colorful cards grid"
          className="max-w-full h-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Contact form */}
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

          {/* Status Message */}
          {submitStatus && (
            <div className={`p-4 rounded-2xl text-center font-medium ${
              submitStatus.type === 'success' 
                ? 'bg-green-100 text-green-800 border-2 border-green-300' 
                : 'bg-red-100 text-red-800 border-2 border-red-300'
            }`}>
              {submitStatus.message}
            </div>
          )}

          {/* Submit Button */}
          <div className="pt-2">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white py-4 text-xl rounded-2xl shadow-lg font-semibold transition-all duration-200 transform hover:scale-[1.02] disabled:transform-none"
            >
              {isSubmitting ? 'Sending...' : 'Submit'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
