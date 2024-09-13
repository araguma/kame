import { ColorSchemeScript, MantineProvider } from '@mantine/core'
import React from 'react'

import '@/app/globals.css'
import { mantineTheme } from '@/theme'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <ColorSchemeScript />
            </head>
            <body>
                <MantineProvider theme={mantineTheme}>{children}</MantineProvider>
            </body>
        </html>
    )
}
