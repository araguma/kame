// @ts-check
import { tailwindTheme } from './src/theme'

/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: tailwindTheme,
    },
}

export default tailwindConfig
