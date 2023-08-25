import { TabsLayout } from '@/components/calculator/TabsLayout'
import Hero from '@/components/main/Hero'
import { Metadata } from 'next'

export const metadata: Metadata = {
    metadataBase: new URL('https://payment.calculator.driv.ly/'),
    title: 'driv.ly - Car Payment Calculator',
    description:
        'Budget, qualify and apply within minutes for your perfect car',
    openGraph: {
        type: 'website',
        url: 'https://payment.calculator.driv.ly/',
        siteName: 'payment.calculator.driv.ly',
        images: [
            {
                url: '/og',
                alt: 'driv.ly Logo',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'driv.ly - Car Payment Calculator',
        description:
            'Budget, qualify and apply within minutes for your perfect car',
        images: ['/og'],
    },
    themeColor: '#ffffff',
}

export default function Home() {
    return (
        <main className="flex h-screen flex-col py-10">
            <Hero />
            <div className="flex flex-row justify-center">
                <TabsLayout />
            </div>
        </main>
    )
}
