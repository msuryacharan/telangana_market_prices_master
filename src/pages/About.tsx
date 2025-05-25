import React from 'react';
import AdBanner from '../components/AdBanner';

const About: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-2xl font-semibold text-[#000080] mb-4">About Us</h2>
      
      <div className="prose max-w-none">
        <p className="text-gray-700 mb-4">
          Welcome to the Telangana Government Market Prices portal, your trusted source for daily agricultural commodity prices across various markets in Telangana. Our platform serves as a bridge between farmers, traders, and consumers, providing transparent and up-to-date market information.
        </p>
        
        <AdBanner className="my-6" />
        
        <h3 className="text-xl font-semibold text-[#138808] mb-3">Our Mission</h3>
        <p className="text-gray-700 mb-4">
          To empower farmers and traders with real-time market intelligence, enabling better decision-making and fair trade practices in agricultural commodities. We strive to create transparency in agricultural markets and help farmers get the best value for their produce.
        </p>
        
        <h3 className="text-xl font-semibold text-[#138808] mb-3">Data Collection & Updates</h3>
        <p className="text-gray-700 mb-4">
          Our platform collects price data daily from authorized government markets (mandis) across Telangana. The information is:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
          <li>Updated daily by 6:00 PM</li>
          <li>Verified by market officials</li>
          <li>Covers all major agricultural commodities</li>
          <li>Includes historical data for trend analysis</li>
        </ul>
        
        <h3 className="text-xl font-semibold text-[#138808] mb-3">Key Features</h3>
        <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
          <li>Real-time price updates from major markets</li>
          <li>District and market-wise filtering</li>
          <li>7-day price trend visualization</li>
          <li>Maximum, minimum, and average price tracking</li>
          <li>Mobile-responsive design for easy access</li>
          <li>Price change indicators and statistics</li>
        </ul>
        
        <h3 className="text-xl font-semibold text-[#138808] mb-3">How to Use</h3>
        <p className="text-gray-700 mb-4">
          Our platform is designed to be intuitive and user-friendly:
        </p>
        <ol className="list-decimal list-inside text-gray-700 mb-4 ml-4">
          <li>Select your district and market of interest</li>
          <li>Choose a date within the last 7 days</li>
          <li>View commodity prices and trends</li>
          <li>Track price changes and market dynamics</li>
        </ol>
        
        <h3 className="text-xl font-semibold text-[#138808] mb-3">Government Initiative</h3>
        <p className="text-gray-700 mb-4">
          This platform is an initiative of the Telangana State Agricultural Marketing Department, aimed at promoting transparency and efficiency in agricultural markets. It aligns with the government's vision of digital empowerment of farmers and agricultural stakeholders.
        </p>
      </div>
    </div>
  );
};

export default About;