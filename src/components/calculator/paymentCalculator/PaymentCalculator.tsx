'use client'
import { useSearchParams } from 'next/navigation'
import PaymentHandlerResponse from './PaymentCalculatorResponse'
import VehicleDetailsForm from './VehicleDetailsForm'
import { PaymentCalculatorProps } from '@/lib/interfaces/PaymentCalculatorProps'
import { useForm, FormProvider, useFormContext } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const FormSchema = z.object({
    vin: z
        .string()
        .min(17, 'VIN is required')
        .max(17, 'VIN is required')
        .default('3TYSZ5AN8PT104981'),
    vehiclePrice: z
        .number()
        .min(0, 'Vehicle price is required')
        .max(20000)
        .default(25000),
    downPayment: z.number().min(0).max(20000).default(500),
    tradeInValue: z.number().min(0).max(20000).default(2000),
    creditScore: z.number().min(300).max(800).default(675),
    loanTerm: z.number().min(12).max(84).default(36),
    zip: z
        .number()
        .min(5, 'Zip code is required')
        .max(5, 'Zip code is required'),
})

export default function PaymentHandler({
    selectedTab,
}: PaymentCalculatorProps) {
    const searchParams = useSearchParams()
    const vin = searchParams.get('vin') ?? undefined

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            vin: vin ?? '',
            vehiclePrice: 25000,
            downPayment: 5000,
            tradeInValue: 2000,
            creditScore: 675,
            loanTerm: 36,
            zip: 98164,
        },
    })

    return (
        <div
            className="grid grid-cols-1 justify-center gap-6 md:grid-cols-2
            md:gap-10
        ">
            <FormProvider {...form}>
                <VehicleDetailsForm />
                <PaymentHandlerResponse selectedTab={selectedTab} />
            </FormProvider>
        </div>
    )
}
