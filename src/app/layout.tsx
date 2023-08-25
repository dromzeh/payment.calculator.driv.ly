import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/navigation/Header'

const inter = Inter({ subsets: ['latin'] })

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
