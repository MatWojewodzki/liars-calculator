import React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/calculator')({
    component: Calculator,
})

function Calculator() {

    const [cardCount, setCardCount] = useState(1)
    const [handSize, setHandSize] = useState(1)
    const [pokerHand, setPokerHand] = useState("")

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(cardCount, handSize, pokerHand)
    }

    return (
        <>
            <h1>Calculate the exact probability of poker hands on the table</h1>
            <p>{cardCount} card{cardCount > 1 && "s"} on the table</p>

            <form onSubmit={handleFormSubmit}>
                <input
                    type="range"
                    name="cardCount"
                    min="1"
                    max="23"
                    step="1"
                    value={cardCount}
                    onChange={(e) => setCardCount(e.target.valueAsNumber)}
                />
                <input
                    type="number"
                    name="handSize"
                    min="1"
                    value={handSize}
                    onChange={(e) => setHandSize(e.target.valueAsNumber)}
                />
                <select
                    name="pokerHand"
                    value={pokerHand}
                    onChange={(e) => setPokerHand(e.target.value)}
                >
                    <option value="">Select a poker hand</option>
                    <option value="Straight flush">Straight flush</option>
                    <option value="Four of a kind">Four of a kind</option>
                    <option value="Flush">Flush</option>
                    <option value="Full house">Full house</option>
                    <option value="Three of a kind">Three of a kind</option>
                    <option value="Straight">Straight</option>
                    <option value="Two pair">Two pair</option>
                    <option value="Pair">One pair</option>
                    <option value="High card">High card</option>
                </select>
                <button type="submit">Calculate!</button>
            </form>
        </>
    )
}