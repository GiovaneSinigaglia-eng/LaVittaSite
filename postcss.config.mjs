/** @type {import('postcss').Config} */
const config = {
  plugins: {
    // Use o plugin correto para Tailwind CSS no PostCSS
    "@tailwindcss/postcss": {},
    "autoprefixer": {},
  },
}

export default config
