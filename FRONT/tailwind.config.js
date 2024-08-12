/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				rubik: ['rubik', 'sans-serif'],
			},
			colors: {
				imageBackground: {
					50: '#F8FBEA',
				},
				facebookColor: {
					50: '#1877F2',
				},
			},
			boxShadow: {
				bottom: '0 4px 5px -5px #333',
			},
			animation: {
				'spin-slow': 'spin 2s linear infinite',
			},
		},
	},
	plugins: [],
};
