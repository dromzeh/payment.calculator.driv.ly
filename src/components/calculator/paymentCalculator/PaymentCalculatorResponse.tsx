'use client'

import {
    Card,
    CardContent,
    CardFooter,
    CardTitle,
    CardHeader,
    CardDescription,
} from '@/components/ui/card'
import GetPreApproved from '@/components/navigation/GetPreApproved'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'
import { useFormatPrice as formatPrice } from '@/lib/helpers/formatPrice'
import { PaymentCalculatorProps } from '@/lib/interfaces/PaymentCalculatorProps'
import { useState, useEffect, useMemo } from 'react'
import { useRouter } from 'next/navigation'
import { useFormContext } from 'react-hook-form'

export default function PaymentHandlerResponse({
    selectedTab,
}: PaymentCalculatorProps) {
    const form = useFormContext()
    const router = useRouter()

    const watch = useMemo(() => form.watch(), [form])

    const [loanAmount, setLoanAmount] = useState(0)
    const [monthlyPayment, setMonthlyPayment] = useState(0)
    const [totalTaxesAndFees, setTotalTaxesAndFees] = useState(0)
    const [salesTax, setSalesTax] = useState(0)
    const [fees, setFees] = useState(0)

    useEffect(() => {
        let timeoutId: NodeJS.Timeout | null = null

        // if we have a vin, make request to https://payments.vin/3TYSZ5AN8PT104981?downPayment=5000&creditScore=675&zip=98164&term=36
        // and set the values, else calculate them
        if (watch.vin && watch.vin.length === 17) {
            router.push(`?vin=${watch.vin}`)

            timeoutId = setTimeout(() => {
                const paymentsVinApiURL = `https://payments.vin/${watch.vin}?downPayment=${watch.downPayment}&creditScore=${watch.creditScore}&zip=${watch.zip}&tradeIn=${watch.tradeInValue}&term=${watch.loanTerm}`

                fetch(paymentsVinApiURL, { next: { revalidate: 3600 } }) // revalidate every 5 minutes
                    .then((response) => response.json())
                    .then((data) => {
                        if (!data.paymentsData) {
                            throw new Error('No payments data')
                        }
                        setLoanAmount(data.paymentsData.loanAmount)
                        setMonthlyPayment(
                            data.paymentsData.loanMonthlyPaymentWithTaxes,
                        )
                        setTotalTaxesAndFees(
                            data.paymentsData.totalTaxesAndFees,
                        )
                        setSalesTax(data.paymentsData.taxes.combinedSalesTax)
                        setFees(data.paymentsData.fees.combinedFees)
                    })
                    .catch((error) =>
                        console.error('Error fetching payments data', error),
                    ) 
                    
            }, 500)
        } else {
            router.push('/')
            const interest = 0.05
            const calculatedLoanAmount =
                (watch.vehiclePrice - watch.downPayment - watch.tradeInValue) *
                (1 + interest)
            const calculatedMonthlyPayment =
                calculatedLoanAmount / watch.loanTerm

            setLoanAmount(calculatedLoanAmount)
            setMonthlyPayment(calculatedMonthlyPayment)
            setTotalTaxesAndFees(0)
            setSalesTax(0)
            setFees(0)
        }

        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId)
            }
        }
    }, [watch, router])

    return (
        <Card className="w-full md:w-[400px]">
            <CardHeader className="flex items-center rounded-t-lg bg-zinc-950 text-white">
                <CardDescription className="text-white">
                    {selectedTab === 'monthlyPayment'
                        ? 'Estimated Monthly Payment'
                        : 'Estimated Vehicle Price'}
                </CardDescription>
                <CardTitle>
                    {selectedTab === 'monthlyPayment'
                        ? formatPrice(monthlyPayment)
                        : formatPrice(loanAmount)}
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
                <Table className="my-6 w-full">
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium">
                                Loan Amount
                            </TableCell>
                            <TableCell>{formatPrice(loanAmount)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">
                                Monthly Payment
                            </TableCell>
                            <TableCell>{formatPrice(monthlyPayment)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">
                                Total Taxes and Fees
                            </TableCell>
                            <TableCell>
                                {formatPrice(totalTaxesAndFees)}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">
                                Sales Tax
                            </TableCell>
                            <TableCell>{formatPrice(salesTax)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">Fees</TableCell>
                            <TableCell>{formatPrice(fees)}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </CardContent>
            <CardFooter className="items-center justify-center">
                <GetPreApproved />
            </CardFooter>
        </Card>
    )
}
