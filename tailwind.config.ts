import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

export default {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],
  darkMode: 'media',
  important: true,
  prefix: 'tw-',
	theme: {
    colors: {
      // white: 'var(--white)',
      // black: 'var(--black)',
      // transparent: 'var(--transparent)',
      // background: 'var(--background)',
      // foreground: 'var(--foreground)',
      // primary: 'var(--primary)',
      // secondary: 'var(--secondary)',
      // warning: 'var(--warning)',
      // danger: 'var(--danger)',
      // success: 'var(--success)',
      // grey: 'var(--grey)'
    },
    extend: {
      fontFamily: {
        // 'euclid-circular-a': ['var(--font-euclid-circular-a)'],
        // 'gilroy-bold': ['var(--font-gilroy-bold)']
      },
      fontSize: {
        // xs: ['11px', '14px'],
        // sm: ['12.5px', '16px'],
        // base: ['14px', '18px'],
        // lg: ['17px', '22px'],
        // xl: ['22.5px', '28px'],
        // '2xl': ['28px', '36px']
      },
      spacing: {},
      zIndex: {
        1: '1',
        2: '2',
        3: '3'
      }
    },
    container: {
      center: true,
      padding: '16px',
      screens: {
        sm: '576px',
        md: '769px',
        lg: '992px',
        xl: '1280px',
        '2xl': '1536px'
      }
    }
	},
  plugins: [
    plugin(({ addComponents, addUtilities }) => {
      addComponents({
        '.truncate-1': {
          display: '-webkit-box !important',
          '-webkit-line-clamp': '1',
          '-webkit-box-orient': 'vertical',
          textOverflow: 'ellipsis',
          overflow: 'hidden'
        },
        '.truncate-2': {
          display: '-webkit-box !important',
          '-webkit-line-clamp': '2',
          '-webkit-box-orient': 'vertical',
          textOverflow: 'ellipsis',
          overflow: 'hidden'
        },
        '.truncate-3': {
          display: '-webkit-box !important',
          '-webkit-line-clamp': '3',
          '-webkit-box-orient': 'vertical',
          textOverflow: 'ellipsis',
          overflow: 'hidden'
        },
        '.truncate-4': {
          display: '-webkit-box !important',
          '-webkit-line-clamp': '4',
          '-webkit-box-orient': 'vertical',
          textOverflow: 'ellipsis',
          overflow: 'hidden'
        }
      })
      addUtilities({
        '.pointer-events-all': {
          pointerEvents: 'all'
        }
      })
    })
  ]
} satisfies Config
