import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest:{
        name: 'Portfolio Muhammad Hamdan Hariri App',
        short_name: 'Portfolio Hamdan',
        start_url: '/',
        display: 'standalone',
        background_color: '#16151d',
        theme_color: '#16151d',
        icons: [
          {
            src: '/src/assets/react.svg',
            sizes: '192x192',
            type: 'image/svg+xml'
          }
        ]
      }
    })
  ],

})
