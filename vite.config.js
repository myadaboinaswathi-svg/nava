import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        products: resolve(__dirname, 'navayuga_traders___products.html'),
        farmers: resolve(__dirname, 'navayuga_traders___for_farmers.html'),
        buyers: resolve(__dirname, 'navayuga_traders___for_buyers.html'),
        admin: resolve(__dirname, 'navayuga_traders___admin.html'),
        home: resolve(__dirname, 'navayuga_traders___home.html'),
      }
    }
  }
});
