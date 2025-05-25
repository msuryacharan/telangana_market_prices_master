import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import VisitorCounter from './components/VisitorCounter';
import Footer from './components/Footer';
import { MarketData } from './types';
import { fetchMarketData } from './services/dataService';
import { subDays } from 'date-fns';

function App() {
  const [marketData, setMarketData] = useState<MarketData[]>([]);
  const [filteredData, setFilteredData] = useState<MarketData[]>([]);
  const [districts, setDistricts] = useState<string[]>([]);
  const [markets, setMarkets] = useState<string[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    // Add Google AdSense script
    const script = document.createElement('script');
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
    script.async = true;
    script.crossOrigin = 'anonymous';
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const data = await fetchMarketData();
        
        const sevenDaysAgo = subDays(new Date(), 7);
        const recentData = data.filter(item => 
          new Date(item.date) >= sevenDaysAgo
        );
        
        setMarketData(recentData);
        setFilteredData(recentData);
        
        const uniqueDistricts = Array.from(new Set(recentData.map(item => item.district)));
        const uniqueMarkets = Array.from(new Set(recentData.map(item => item.market)));
        
        setDistricts(uniqueDistricts);
        setMarkets(uniqueMarkets);
        
        if (recentData.length > 0) {
          setSelectedProduct(recentData[0].product);
        }
        
        setLoading(false);
      } catch (err) {
        setError('Failed to load market data. Please try again later.');
        setLoading(false);
        console.error('Error loading data:', err);
      }
    };
    
    loadData();
  }, []);
  
  const handleFilter = (selectedDistrict: string, selectedMarket: string, selectedDate: string) => {
    let filtered = [...marketData];
    
    if (selectedDistrict) {
      filtered = filtered.filter(item => item.district === selectedDistrict);
    }
    
    if (selectedMarket) {
      filtered = filtered.filter(item => item.market === selectedMarket);
    }
    
    if (selectedDate) {
      filtered = filtered.filter(item => item.date === selectedDate);
    }
    
    setFilteredData(filtered);
    
    if (filtered.length > 0 && !filtered.some(item => item.product === selectedProduct)) {
      setSelectedProduct(filtered[0].product);
    }
  };
  
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route 
              path="/" 
              element={
                <Home
                  marketData={marketData}
                  filteredData={filteredData}
                  districts={districts}
                  markets={markets}
                  selectedProduct={selectedProduct}
                  onFilter={handleFilter}
                  onProductSelect={setSelectedProduct}
                  loading={loading}
                  error={error}
                />
              } 
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          
          <VisitorCounter />
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;