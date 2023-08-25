'use client'
import { useFormContext } from 'react-hook-form'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Slider } from '@/components/ui/slider'
import { Separator } from '@/components/ui/separator'
import {
    CreditCard,
    CarFront,
    Gauge,
    Banknote,
    Receipt,
    HeartHandshake,
    MapPin,
    CalendarRange
} from 'lucide-react'
import { Label } from '@/components/ui/label'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select'
import {
    Popover,
    PopoverContent,
    PopoverTrigger
} from '@/components/ui/popover'
import { Card, CardContent } from '@/components/ui/card'

const creditScoreOptions = {
    625: '625 (Fair)',
    675: '675 (Good)',
    725: '725 (Very Good)',
    800: '800 (Excellent)'
}

const monthlyTermOptions = {
    36: '36 months',
    48: '48 months',
    60: '60 months',
    72: '72 months',
    84: '84 months'
}

export default function VehicleDetailsForm() {
    const form = useFormContext()
    const watch = form.watch()

    return (
        <Form {...form}>
            <form className="w-full md:w-[400px]">
                <div className="my-2 space-y-4">
                    <Card className="w-full">
                        <CardContent className="mt-6">
                            <div>
                                <div className="my-2 space-y-4">
                                    <FormField
                                        control={form.control}
                                        name="vin"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel id="vin">
                                                    <div className="flex justify-between">
                                                        <div className="flex items-center">
                                                            <CarFront className="mr-2" />
                                                            VIN{' '}
                                                        </div>
                                                        <p className="mt-2 flex items-center text-center text-xs text-gray-600">
                                                            <MapPin
                                                                className="mr-1"
                                                                size={16}
                                                            />
                                                            Calculated for{' '}
                                                            <span className="font-semibold">
                                                                <Popover>
                                                                    <PopoverTrigger className="ml-1 hover:underline">
                                                                        {form.watch(
                                                                            'zip'
                                                                        )}
                                                                    </PopoverTrigger>
                                                                    <PopoverContent>
                                                                        <Label className="mb-2 flex items-center font-semibold">
                                                                            Override
                                                                            Zip
                                                                            Code
                                                                        </Label>
                                                                        <Input
                                                                            type="tel"
                                                                            maxLength={
                                                                                5
                                                                            }
                                                                            inputMode="numeric"
                                                                            placeholder="98164"
                                                                            className="w-full bg-muted"
                                                                            {...form.register(
                                                                                'zip'
                                                                            )}
                                                                        />
                                                                    </PopoverContent>
                                                                </Popover>
                                                            </span>
                                                        </p>
                                                    </div>
                                                </FormLabel>
                                                <div className="flex justify-between gap-2">
                                                    <FormControl>
                                                        <Input
                                                            type="text"
                                                            id="vin"
                                                            placeholder="3TYSZ5AN8PT104981"
                                                            className="w-full bg-muted"
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                </div>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className="relative">
                                    <div className="absolute inset-0 flex items-center">
                                        <span className="w-full border-t" />
                                    </div>
                                    <div className="relative flex justify-center text-xs uppercase">
                                        <span className="bg-background px-2 text-muted-foreground">
                                            Or
                                        </span>
                                    </div>
                                </div>
                                <FormField
                                    control={form.control}
                                    name="vehiclePrice"
                                    render={({ field }) => (
                                        <FormItem>
                                            <div className="flex items-center justify-between">
                                                <FormLabel className="flex items-center font-semibold">
                                                    <CreditCard className="mr-2" />
                                                    Vehicle Price
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type="tel"
                                                        placeholder="10000"
                                                        className="h-8 w-20 bg-muted"
                                                        readOnly
                                                        disabled={
                                                            watch.vin
                                                                ? true
                                                                : false
                                                        }
                                                        {...field}
                                                    />
                                                </FormControl>
                                            </div>
                                            <Slider
                                                id="vehiclePrice"
                                                defaultValue={[10000]}
                                                max={100000}
                                                step={500}
                                                className={
                                                    watch.vin
                                                        ? 'opacity-50'
                                                        : ''
                                                }
                                                disabled={
                                                    watch.vin ? true : false
                                                }
                                                onValueChange={(value) => {
                                                    form.setValue(
                                                        'vehiclePrice',
                                                        value[0]
                                                    )
                                                }}
                                            />
                                            <FormMessage />
                                            <div className="flex justify-between">
                                                <p className="text-sm text-gray-600">
                                                    $0
                                                </p>
                                                <p className="text-sm text-gray-600">
                                                    $100,000
                                                </p>
                                            </div>
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="w-full">
                        <CardContent className="mt-6">
                            <FormField
                                control={form.control}
                                name="downPayment"
                                render={({ field }) => (
                                    <FormItem>
                                        <div className="flex items-center justify-between">
                                            <FormLabel className="flex items-center font-semibold">
                                                <HeartHandshake className="mr-2" />
                                                Down Payment
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="tel"
                                                    placeholder="10000"
                                                    className="h-8 w-20 bg-muted"
                                                    readOnly
                                                    {...field}
                                                />
                                            </FormControl>
                                        </div>
                                        <Slider
                                            id="downPayment"
                                            defaultValue={[10000]}
                                            max={20000}
                                            step={500}
                                            onValueChange={(value) => {
                                                form.setValue(
                                                    'downPayment',
                                                    value[0]
                                                )
                                            }}
                                        />
                                        <FormMessage />
                                        <div className="flex justify-between">
                                            <p className="text-sm text-gray-600">
                                                $0
                                            </p>
                                            <p className="text-sm text-gray-600">
                                                $20,000
                                            </p>
                                        </div>
                                    </FormItem>
                                )}
                            />
                            <Separator className="my-2" />
                            <FormField
                                control={form.control}
                                name="tradeInValue"
                                render={({ field }) => (
                                    <FormItem>
                                        <div className="flex items-center justify-between">
                                            <FormLabel className="flex items-center font-semibold">
                                                <Receipt className="mr-2" />
                                                Trade In Value
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="tel"
                                                    placeholder="10000"
                                                    className="h-8 w-20 bg-muted"
                                                    readOnly
                                                    {...field}
                                                />
                                            </FormControl>
                                        </div>
                                        <Slider
                                            id="tradeInValue"
                                            defaultValue={[
                                                form.getValues('tradeInValue')
                                            ]}
                                            max={20000}
                                            step={500}
                                            onValueChange={(value) => {
                                                form.setValue(
                                                    'tradeInValue',
                                                    value[0]
                                                )
                                            }}
                                        />
                                        <FormMessage />
                                        <div className="flex justify-between">
                                            <p className="text-sm text-gray-600">
                                                $0
                                            </p>
                                            <p className="text-sm text-gray-600">
                                                $20,000
                                            </p>
                                        </div>
                                    </FormItem>
                                )}
                            />
                            <Separator className="my-2" />
                            <FormField
                                control={form.control}
                                name="loanTerm"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel
                                            className="flex items-center font-semibold"
                                            id="loanTerm">
                                            <CalendarRange className="mr-2" />
                                            Loan Term
                                        </FormLabel>
                                        <FormControl>
                                            <Select
                                                onValueChange={(value) => {
                                                    form.setValue(
                                                        'loanTerm',
                                                        parseInt(value)
                                                    )
                                                }}
                                                defaultValue={field.value.toString()}>
                                                <SelectTrigger className="w-full bg-muted">
                                                    <SelectValue placeholder="Loan Term" />
                                                </SelectTrigger>
                                                <SelectContent id="loanTerm">
                                                    <SelectGroup>
                                                        <SelectLabel
                                                            defaultValue={
                                                                field.value
                                                            }>
                                                            Loan Term
                                                        </SelectLabel>
                                                        {Object.entries(
                                                            monthlyTermOptions
                                                        ).map(
                                                            ([key, value]) => (
                                                                <SelectItem
                                                                    key={key}
                                                                    value={key}>
                                                                    {value}
                                                                </SelectItem>
                                                            )
                                                        )}
                                                    </SelectGroup>
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Separator className="my-2" />
                            <FormField
                                control={form.control}
                                name="creditScore"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel
                                            className="flex items-center font-semibold"
                                            id="creditScore">
                                            <Gauge className="mr-2" />
                                            Credit Score
                                        </FormLabel>
                                        <FormControl>
                                            <Select
                                                onValueChange={(value) => {
                                                    form.setValue(
                                                        'creditScore',
                                                        parseInt(value)
                                                    )
                                                }}
                                                defaultValue={field.value.toString()}>
                                                <SelectTrigger className="w-full bg-muted">
                                                    <SelectValue placeholder="Credit Score" />
                                                </SelectTrigger>
                                                <SelectContent id="creditScore">
                                                    <SelectGroup>
                                                        <SelectLabel
                                                            defaultValue={
                                                                field.value
                                                            }>
                                                            Credit Score
                                                        </SelectLabel>
                                                        {Object.entries(
                                                            creditScoreOptions
                                                        ).map(
                                                            ([key, value]) => (
                                                                <SelectItem
                                                                    key={key}
                                                                    value={key}>
                                                                    {value}
                                                                </SelectItem>
                                                            )
                                                        )}
                                                    </SelectGroup>
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </CardContent>
                    </Card>
                </div>
            </form>
        </Form>
    )
}
