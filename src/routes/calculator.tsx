import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/calculator')({
    component: Calculator,
})

function Calculator() {

    const [cardCount, setCardCount] = useState(1)

    return (
        <>
            <h1>Calculate the exact probability of poker hands on the table</h1>
            <p>{cardCount} card{cardCount > 1 && "s"} on the table</p>
            <input
                type="range"
                min="1"
                max="23"
                step="1"
                value={cardCount}
                onChange={(e) => setCardCount(e.target.valueAsNumber)}
            />
        </>
    )
}