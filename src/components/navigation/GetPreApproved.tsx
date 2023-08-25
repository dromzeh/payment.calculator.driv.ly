import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { getCurrentTime } from '@/lib/helpers/getCurrentTime'

export default function GetPreApproved() {
    const [isHovered, setIsHovered] = useState<boolean>(false)
    const [currentTime, setCurrentTime] = useState<string>('Today') // fallback

    useEffect(() => {
        setCurrentTime(getCurrentTime())
    }, [])

    return (
        <>
            <Button
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
                Get Pre-Approved{' '}
                {currentTime !== 'Today' && 'This ' + currentTime}
                <motion.span animate={{ x: isHovered ? 5 : 0 }}>
                    <ArrowRight className="ml-1" />
                </motion.span>
            </Button>
        </>
    )
}
