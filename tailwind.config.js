/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', './**/*.{html,svg}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'pure-white': '#FFFFFF',
        'pure-black': '#000000',
        'github-black': '#24292F',
        'linkedin-blue': '#0077B5',
        'default-color': '#3944BC',
      },
      fontFamily: {
        'google': ["ProductSans"],
        'sans': ['Product', 'Mona', 'sans-serif']
      },
      variants: {
        fill: ['hover', 'focus'],
      },
    },
  },
  plugins: [],
}

