'use client'

import PaymentHandler from './paymentCalculator/PaymentCalculator'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useState } from 'react'

type TabValue = 'monthlyPayment' | 'vehiclePrice'

export function TabsLayout() {
    const [selectedTab, setSelectedTab] = useState<TabValue>('monthlyPayment')

    return (
        <Tabs defaultValue="monthlyPayment">
            <div className="flex flex-row justify-center">
                <TabsList className="mb-10 grid w-[400px] grid-cols-2 rounded-full bg-[#F0F6FB]">
                    <TabsTrigger
                        value="monthlyPayment"
                        className="rounded-full"
                        onClick={() => setSelectedTab('monthlyPayment')}>
                        Monthly Payment
                    </TabsTrigger>
                    <TabsTrigger
                        value="vehiclePrice"
                        className="rounded-full"
                        onClick={() => setSelectedTab('vehiclePrice')}>
                        Vehicle Price
                    </TabsTrigger>
                </TabsList>
            </div>
            <div className="mb-10">
                <PaymentHandler selectedTab={selectedTab} />
            </div>
        </Tabs>
    )
}
