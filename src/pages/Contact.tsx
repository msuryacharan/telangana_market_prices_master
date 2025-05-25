import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import AdBanner from '../components/AdBanner';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the data to a server
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-2xl font-semibold text-[#000080] mb-4">Contact Us</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold text-[#138808] mb-4">Get in Touch</h3>
          <div className="space-y-6">
            <div className="flex items-start">
              <Phone className="h-5 w-5 text-[#FF9933] mr-3 mt-1" />
              <div>
                <p className="font-medium">Phone Support</p>
                <p className="text-gray-600">Toll Free: 1800-120-4949</p>
                <p className="text-gray-600">Direct: +91 40 2345 6789</p>
                <p className="text-xs text-gray-500 mt-1">Monday to Saturday: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Mail className="h-5 w-5 text-[#FF9933] mr-3 mt-1" />
              <div>
                <p className="font-medium">Email Support</p>
                <p className="text-gray-600">General: info@telanganamarkets.gov.in</p>
                <p className="text-gray-600">Support: support@telanganamarkets.gov.in</p>
                <p className="text-gray-600">Technical: tech@telanganamarkets.gov.in</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <MapPin className="h-5 w-5 text-[#FF9933] mr-3 mt-1" />
              <div>
                <p className="font-medium">Office Address</p>
                <p className="text-gray-600">
                  Agricultural Marketing Department<br />
                  Public Gardens Road, Nampally<br />
                  Hyderabad, Telangana - 500004<br />
                  India
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
              <h4 className="font-medium text-[#138808] mb-2">District Offices</h4>
              <p className="text-sm text-gray-600">
                We have offices in all district headquarters. Please contact the main office for district-specific contact details.
              </p>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold text-[#138808] mb-4">Send us a Message</h3>
          {submitted ? (
            <div className="bg-green-50 text-green-800 p-4 rounded-lg border border-green-200">
              <h4 className="font-medium mb-2">Thank you for your message!</h4>
              <p className="text-sm">
                We have received your inquiry and will respond within 24-48 hours during business days.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#138808] focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#138808] focus:border-transparent"
                  placeholder="Enter your email address"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subject *</label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#138808] focus:border-transparent"
                  placeholder="Enter message subject"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#138808] focus:border-transparent"
                  placeholder="Enter your message here..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="bg-[#138808] text-white px-6 py-2 rounded-md hover:bg-[#0F6F0F] transition-colors flex items-center"
              >
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
      
      <AdBanner className="mt-8" />
    </div>
  );
};

export default Contact;