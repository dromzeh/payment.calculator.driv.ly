import './globals.css'
import type { Metadata } from 'next'
import { IBM_Plex_Sans } from 'next/font/google'
import Header from '@/components/navigation/Header'

const inter = IBM_Plex_Sans({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700']
})

export const metadata: Metadata = {
    title: 'driv.ly –– Car Payment Calculator',
    description:
        'See how much you need to budget for your perfect car and quality of apply in minutes!'
}

export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Header />
                {children}
            </body>
        </html>
    )
}
