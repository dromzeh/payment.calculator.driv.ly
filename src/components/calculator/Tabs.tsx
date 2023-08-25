'use client'

import PaymentHandler from './paymentCalculator/PaymentCalculator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useState } from 'react'

type TabValue = 'monthlyPayment' | 'vehiclePrice'

export function TabsDemo() {
    const [selectedTab, setSelectedTab] = useState<TabValue>('monthlyPayment')

    return (
        <Tabs defaultValue="monthlyPayment">
            <div className="flex flex-row justify-center">
                <TabsList className="mb-10 grid w-[400px] grid-cols-2 rounded-lg">
                    <TabsTrigger
                        value="monthlyPayment"
                        className="rounded-lg"
                        onClick={() => setSelectedTab('monthlyPayment')}>
                        Monthly Payment
                    </TabsTrigger>
                    <TabsTrigger
                        value="vehiclePrice"
                        className="rounded-lg"
                        onClick={() => setSelectedTab('vehiclePrice')}>
                        Vehicle Price
                    </TabsTrigger>
                </TabsList>
            </div>
            <PaymentHandler selectedTab={selectedTab} />
        </Tabs>
    )
}
