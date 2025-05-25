import React from 'react';
import FilterSection from '../components/FilterSection';
import DataTable from '../components/DataTable';
import PriceGraph from '../components/PriceGraph';
import PriceStatistics from '../components/PriceStatistics';
import AdBanner from '../components/AdBanner';
import { MarketData } from '../types';

interface HomeProps {
  marketData: MarketData[];
  filteredData: MarketData[];
  districts: string[];
  markets: string[];
  selectedProduct: string;
  onFilter: (district: string, market: string, date: string) => void;
  onProductSelect: (product: string) => void;
  loading: boolean;
  error: string | null;
}

const Home: React.FC<HomeProps> = ({
  marketData,
  filteredData,
  districts,
  markets,
  selectedProduct,
  onFilter,
  onProductSelect,
  loading,
  error
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8 border-t-4 border-[#FF9933]">
      <h2 className="text-2xl font-semibold text-[#000080] mb-4">
        Market Prices Dashboard
      </h2>
      
      <FilterSection 
        districts={districts}
        markets={markets}
        onFilter={onFilter}
      />
      
      <AdBanner className="my-6" />
      
      {loading ? (
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#138808]"></div>
        </div>
      ) : error ? (
        <div className="bg-red-50 text-red-700 p-4 rounded-md mt-4">
          {error}
        </div>
      ) : (
        <>
          <PriceStatistics data={filteredData} />
          
          <DataTable 
            data={filteredData}
            onProductSelect={onProductSelect}
            selectedProduct={selectedProduct}
          />
          
          {selectedProduct && (
            <div className="mt-8">
              <PriceGraph 
                data={marketData.filter(item => item.product === selectedProduct)}
                product={selectedProduct}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Home;