import React from 'react'
import { useScramble } from 'use-scramble'

export function useFormatPrice(price: number): JSX.Element {
    const { ref } = useScramble({
        text: `$${price.toLocaleString()}`,
        playOnMount: true,
        overflow: true
    })

    return <p ref={ref} />
}
