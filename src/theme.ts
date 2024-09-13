import { createTheme } from '@mantine/core'
import colors from 'tailwindcss/colors'
import { CustomThemeConfig } from 'tailwindcss/types/config'

const mantineTheme = createTheme({
    colors: {
        gray: [
            colors.gray[50],
            colors.gray[100],
            colors.gray[200],
            colors.gray[300],
            colors.gray[400],
            colors.gray[500],
            colors.gray[600],
            colors.gray[700],
            colors.gray[800],
            colors.gray[900],
            colors.gray[950],
        ],
    },
    primaryShade: {
        light: 9,
        dark: 1,
    },
    primaryColor: 'gray',
})

const tailwindTheme: Partial<CustomThemeConfig> = {}

export { mantineTheme, tailwindTheme }
