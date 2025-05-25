import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: 'telangana_market_prices_master',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
