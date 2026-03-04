import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: {
          pdf: ['pdf-lib', 'pdfjs-dist', 'jspdf'],
          word: ['docx', 'mammoth'],
          ocr: ['tesseract.js'],
          vendor: ['react', 'react-dom', 'react-router-dom']
        }
      }
    }
  },
  optimizeDeps: {
    exclude: ['tesseract.js']
  }
});