import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Permite acceso desde la red local
    port: 5173,
    allowedHosts: [
      'b5d0-201-206-180-150.ngrok-free.app', // Dominio actual de ngrok
      '.ngrok-free.app' // Permite cualquier subdominio de ngrok
    ]
  },
  build: {
    outDir: 'dist',
  },
});