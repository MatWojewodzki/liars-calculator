import React from 'react'
import { createFileRoute, Outlet } from '@tanstack/react-router'
import { useState } from 'react'
import { z } from 'zod'
import CardCountInput from '../components/CardCountInput'

const pokerHandSchema = z.enum([
    "highCard", "pair", "twoPair", "straight", "threeOfAKind", "fullHouse", "flush", "fourOfAKind", "straightFlush"
])

const searchSchema = z.object({
    cardCount: z.number().int().min(1).max(23).optional(),
    handSize: z.number().int().min(1).max(23).optional(),
    pokerHand: pokerHandSchema.optional(),
})

export const Route = createFileRoute('/calculator')({
    component: Calculator,
    validateSearch: searchSchema,
})

function Calculator() {

    const navigate = Route.useNavigate()
    const search = Route.useSearch()

    const [cardCount, setCardCount] = useState(search.cardCount || 1)
    const [handSize, setHandSize] = useState(search.handSize || 1)
    const [pokerHand, setPokerHand] = useState(search.pokerHand || "")

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        navigate({
            to: "/calculator/results",
            search: searchSchema.parse({
                cardCount, handSize, pokerHand
            })
        })
    }

    return (
        <>
            <h1>Calculate the exact probability of a poker hand occurring on the table</h1>

            <form onSubmit={handleFormSubmit}>

                <label htmlFor="cardCount">Number of cards on the table</label>
                <CardCountInput id="cardCount" value={cardCount} setValue={setCardCount} />

                <label htmlFor="handSize">Number of cards on your hand</label>
                <CardCountInput id="handSize" value={handSize} setValue={setHandSize} />

                <label htmlFor="pokerHand">Poker hand</label>
                <select
                    id="pokerHand"
                    value={pokerHand}
                    onChange={(e) => setPokerHand(e.target.value)}
                >
                    <option value="" disabled>Select a poker hand</option>
                    <option value="highCard">High card</option>
                    <option value="pair">One pair</option>
                    <option value="twoPair">Two pair</option>
                    <option value="straight">Straight</option>
                    <option value="threeOfAKind">Three of a kind</option>
                    <option value="fullHouse">Full house</option>
                    <option value="flush">Flush</option>
                    <option value="fourOfAKind">Four of a kind</option>
                    <option value="straightFlush">Straight flush</option>
                </select>

                <button type="submit" disabled={!pokerHand}>Calculate!</button>
            </form>

            <Outlet />
        </>
    )
}