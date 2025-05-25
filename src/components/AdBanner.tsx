import React, { useEffect } from 'react';

interface AdBannerProps {
  className?: string;
}

const AdBanner: React.FC<AdBannerProps> = ({ className = '' }) => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
      console.error('Error loading AdSense:', error);
    }
  }, []);

  return (
    <div className={`text-center overflow-hidden ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-xxxxxxxxxxxxxxxx"
        data-ad-slot="1234567890"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
};

export default AdBanner;