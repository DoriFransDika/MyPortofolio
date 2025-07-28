// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Arial', 'sans-serif'], // Contoh, bisa diganti font default Anda
        serif: ['Georgia', 'serif'],
        cursive: ['"Brush Script MT"', 'cursive'],
        pacifico: ['Pacifico', 'cursive'],
        inter: ['Inter', 'sans-serif'],
      },
      keyframes: {
        fall: {
          '0%': { opacity: 0, transform: 'translateY(-50px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        }
      },

      backgroundImage: {
        'pattern-white-abstract': "url('https://static.vecteezy.com/system/resources/previews/010/820/720/original/white-background-random-minimalist-abstract-illustration-for-logo-card-banner-web-and-printing-vector.jpg')",
        // Anda bisa tambahkan lebih banyak gambar background di sini jika diperlukan
        // 'hero-pattern': "url('/image/hero-bg.jpg')",
      },

      colors: {
        // Palet Primer
        'dark-teal': '#1A3A4A',
        'navy-dark': '#0A192F', // Untuk background paling gelap

        // Palet Sekunder/Aksen
        'soft-gold': '#D4AF37',
        'pale-gold': '#E0B962',
        'dusty-rose': '#C89999',

        // Palet Netral
        'off-white': '#F8F8F8', // Atau gunakan gray-50/gray-100 dari Tailwind
        'charcoal': '#333333',
        'light-gray-bg': '#F0F0F0', // Untuk background section putih Anda
      },

      animation: {
        fall: 'fall 1s forwards',
      },
    },
  },
  plugins: [],
}