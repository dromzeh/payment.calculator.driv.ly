'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function ContactUs() {
    const [isHovered, setIsHovered] = useState<boolean>(false)
    return (
        <>
            <Button
                variant="outline"
                onClick={() => {
                    window.open(
                        'https://drivly.typeform.com/to/nqwus8kr/',
                        '_blank'
                    )
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
                Contact Us{' '}
                <motion.span animate={{ x: isHovered ? 5 : 0 }}>
                    <ArrowRight className="ml-1" />
                </motion.span>
            </Button>
        </>
    )
}
