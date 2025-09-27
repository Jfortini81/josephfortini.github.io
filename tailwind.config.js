/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js}",
    "./**/*.{html,js}"
  ],
  theme: {
    extend: {

      fontFamily: {
        'display': ['Bebas Neue', 'sans-serif'],
        'body' : ['Helvetica', 'sans-serif']
      },

      fontSize: {
        // Scale for luxury hierarchy
        'xs': ['0.75rem', { lineHeight: '1rem' }],      // 12px
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],  // 14px
        'base': ['1rem', { lineHeight: '1.5rem' }],     // 16px
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],  // 18px
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],   // 20px
        '2xl': ['1.5rem', { lineHeight: '2rem' }],      // 24px
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }], // 30px
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],   // 36px
        '5xl': ['3rem', { lineHeight: '1' }],           // 48px - display
        '6xl': ['3.75rem', { lineHeight: '1' }] ,        // 60px - hero
        '7xl': ['4rem', { lineHeight: '1' }]         // 60px - hero
      },
      
      fontWeight: {
        thin: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        black: '900'
      },

      // Custom colors for your portfolio
      colors: {
        // Background colors
        'bg-primary': '#010101',      // Main background (Almost black)
        'bg-secondary': '#1A1A1A',    // Secondary background (Dark Gray)
        'bg-accent': '#E5E5DD',       // Light accent background
        
        // Text colors
        'text-primary': '#E5E5DD',    // Main text color
        'text-secondary': '#6b7280',  // Secondary text color
        'text-caption': '#898985',   // Tertiary text color
        'text-accent': '#ffffff',     // Light text for dark backgrounds
        
        'text-on-light': 'EAEAE4',
        'dot-not-selected' : '#898985',
        'dot-selected': '#E5E5DD', 
      }
    },
  },
  plugins: [],
}

