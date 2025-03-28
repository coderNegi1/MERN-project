// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite'; // Import tailwind plugin

export default defineConfig({
  plugins: [react(), tailwindcss()], // Add tailwind plugin
});