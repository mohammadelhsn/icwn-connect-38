import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '1rem',
			screens: {
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1120px',
				'2xl': '1120px'
			}
		},
		extend: {
			fontFamily: {
				heading: ['Plus Jakarta Sans', 'Inter', 'Segoe UI', 'Helvetica Neue', 'Arial', 'sans-serif'],
				body: ['Inter', 'Segoe UI', 'Helvetica Neue', 'Arial', 'sans-serif'],
				arabic: ['IBM Plex Sans Arabic', 'Noto Sans Arabic', 'system-ui', 'sans-serif']
			},
			fontVariantNumeric: {
				'tabular-nums': 'tabular-nums'
			},
			colors: {
				// Brand Colors - Greens
				green: {
					900: 'hsl(var(--green-900))',
					800: 'hsl(var(--green-800))',
					700: 'hsl(var(--green-700))',
					600: 'hsl(var(--green-600))',
					500: 'hsl(var(--green-500))',
					100: 'hsl(var(--green-100))',
					50: 'hsl(var(--green-50))'
				},
				// Beiges
				beige: {
					50: 'hsl(var(--beige-50))',
					100: 'hsl(var(--beige-100))',
					200: 'hsl(var(--beige-200))'
				},
				// Neutrals
				ink: {
					900: 'hsl(var(--ink-900))',
					600: 'hsl(var(--ink-600))'
				},
				// Accents
				gold: {
					500: 'hsl(var(--gold-500))',
					100: 'hsl(var(--gold-100))'
				},
				// Semantic
				success: 'hsl(var(--success))',
				warning: 'hsl(var(--warning))',
				info: 'hsl(var(--info))',
				error: 'hsl(var(--error))',
				
				// Design System Mapping
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				card: '1rem',  /* 16px for cards */
				button: '0.75rem'  /* 12px for buttons */
			},
			boxShadow: {
				card: 'var(--shadow-card)',
				hover: 'var(--shadow-hover)'
			},
			spacing: {
				18: '4.5rem',  /* 72px */
				22: '5.5rem'   /* 88px */
			},
			transitionTimingFunction: {
				smooth: 'cubic-bezier(0.4, 0, 0.2, 1)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
