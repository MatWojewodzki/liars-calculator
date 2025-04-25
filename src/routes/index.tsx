import React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import CardCountInput from '../components/CardCountInput'
import indexSearch from "../schemas/indexSearch.ts"
import CalculatorResults from "../components/CalculatorResults.tsx"

export const Route = createFileRoute('/')({
    component: Index,
    validateSearch: indexSearch,
})

function Index() {

    const navigate = Route.useNavigate()
    const search = Route.useSearch()

    const [cardCount, setCardCount] = useState(search.cardCount || 1)
    const [handSize, setHandSize] = useState(search.handSize || 1)
    const [pokerHand, setPokerHand] = useState(search.pokerHand || "")

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        navigate({
            to: ".",
            search: indexSearch.parse({
                cardCount, handSize, pokerHand
            })
        })
    }

    return (
        <>
            <section className="py-16 px-1 flex flex-col items-center bg-neutral-50">

                <h1 className="text-center">Calculate the odds in Liar's Poker card game</h1>
                <p className="text-center">The exact probability of every poker hand assuming a 24-card deck is used.</p>

                <form
                    onSubmit={handleFormSubmit}
                    className="flex flex-col lg:flex-row items-stretch lg:items-baseline gap-3 mt-12"
                >
                    <div className="flex justify-center p-5 gap-x-3 items-baseline bg-white rounded-lg">
                        <label htmlFor="cardCount">Number of cards on the table</label>
                        <CardCountInput id="cardCount" value={cardCount} setValue={setCardCount} />
                    </div>

                    <div className="flex justify-center p-5 gap-x-3 items-baseline bg-white rounded-lg">
                        <label htmlFor="handSize">Number of cards on your hand</label>
                        <CardCountInput id="handSize" value={handSize} setValue={setHandSize} />
                    </div>
                    <div className="flex justify-center p-5 gap-x-3 items-baseline bg-white rounded-lg">
                        <label htmlFor="pokerHand" className="sr-only">Poker hand</label>
                        <select
                            id="pokerHand"
                            value={pokerHand}
                            onChange={(e) => setPokerHand(e.target.value)}
                        >
                            <option value="" disabled>Select a poker hand</option>
                            <option value="highCard">High card</option>
                            <option value="pair">Pair</option>
                            <option value="twoPair">Two pair</option>
                            <option value="straight">Straight</option>
                            <option value="threeOfAKind">Three of a kind</option>
                            <option value="fullHouse">Full house</option>
                            <option value="flush">Flush</option>
                            <option value="fourOfAKind">Four of a kind</option>
                            <option value="straightFlush">Straight flush</option>
                        </select>
                    </div>
                    <button
                        type="submit"
                        disabled={!pokerHand}
                        className="w-full lg:w-fit py-2 px-4 rounded-lg lg:rounded-full bg-neutral-200 hover:bg-neutral-300"
                    >
                        Calculate!
                    </button>
                </form>
            </section>
            <section className="py-16 px-1 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40">
                <CalculatorResults {...search} />
            </section>
        </>
    )
}