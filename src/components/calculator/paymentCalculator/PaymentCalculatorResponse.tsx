'use client'

import {
    Card,
    CardContent,
    CardFooter,
    CardTitle,
    CardHeader,
    CardDescription
} from '@/components/ui/card'
import GetPreApproved from '@/components/navigation/GetPreApproved'
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'
import { useFormatPrice as formatPrice } from '@/lib/helpers/formatPrice'
import { PaymentCalculatorProps } from '@/lib/interfaces/PaymentCalculatorProps'
import { useEffect, useMemo, useReducer } from 'react'
import { useRouter } from 'next/navigation'
import { useFormContext } from 'react-hook-form'

const initialState = {
    loanAmount: 25000,
    monthlyPayment: 500,
    totalTaxesAndFees: 500,
    salesTax: 0,
    fees: 0
}

type Action = {
    type: string
    payload: any
}

const reducer = (state: any, action: Action) => {
    switch (action.type) {
        case 'setLoanAmount':
            return { ...state, loanAmount: action.payload }
        case 'setMonthlyPayment':
            return { ...state, monthlyPayment: action.payload }
        case 'setTotalTaxesAndFees':
            return { ...state, totalTaxesAndFees: action.payload }
        case 'setSalesTax':
            return { ...state, salesTax: action.payload }
        case 'setFees':
            return { ...state, fees: action.payload }
        default:
            throw new Error()
    }
}

export default function PaymentHandlerResponse({
    selectedTab
}: PaymentCalculatorProps) {
    const [state, dispatch] = useReducer(reducer, initialState)

    const form = useFormContext()
    const router = useRouter()

    const watch = useMemo(() => form.watch(), [form])

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
                        dispatch({
                            type: 'setLoanAmount',
                            payload: data.paymentsData.loanAmount
                        })
                        dispatch({
                            type: 'setMonthlyPayment',
                            payload:
                                data.paymentsData.loanMonthlyPaymentWithTaxes
                        })
                        dispatch({
                            type: 'setTotalTaxesAndFees',
                            payload: data.paymentsData.totalTaxesAndFees
                        })
                        dispatch({
                            type: 'setSalesTax',
                            payload: data.paymentsData.taxes.combinedSalesTax
                        })
                        dispatch({
                            type: 'setFees',
                            payload: data.paymentsData.fees.combinedFees
                        })
                    })
                    .catch((error) =>
                        console.error('Error fetching payments data', error)
                    )
            }, 200)
        } else {
            router.push('/')

            const interest = 0.05
            const calculatedLoanAmount =
                (watch.vehiclePrice - watch.downPayment - watch.tradeInValue) *
                (1 + interest)
            const calculatedMonthlyPayment =
                calculatedLoanAmount / watch.loanTerm

            dispatch({
                type: 'setLoanAmount',
                payload: calculatedLoanAmount
            })
            dispatch({
                type: 'setMonthlyPayment',
                payload: calculatedMonthlyPayment
            })
            dispatch({
                type: 'setTotalTaxesAndFees',
                payload: 0
            })
            dispatch({
                type: 'setSalesTax',
                payload: 0
            })
            dispatch({
                type: 'setFees',
                payload: 0
            })
        }

        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId)
            }
        }
    }, [watch, router])

    return (
        <Card className="w-full md:w-[400px]">
            <CardHeader className="flex items-center rounded-t-lg bg-[#16162A] text-white">
                <CardDescription className="text-white">
                    {selectedTab === 'monthlyPayment'
                        ? 'Estimated Monthly Payment'
                        : 'Estimated Vehicle Price'}
                </CardDescription>
                <CardTitle>
                    {selectedTab === 'monthlyPayment'
                        ? formatPrice(state.monthlyPayment)
                        : formatPrice(state.loanAmount)}
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
                <Table className="my-6 w-full">
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium">
                                Sales Tax
                            </TableCell>
                            <TableCell>{formatPrice(state.salesTax)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">Fees</TableCell>
                            <TableCell>{formatPrice(state.fees)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">
                                Total Taxes and Fees
                            </TableCell>
                            <TableCell>
                                {formatPrice(state.totalTaxesAndFees)}
                            </TableCell>
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
