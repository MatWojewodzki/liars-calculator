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
            <section className="py-16 px-1 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40">
                <h1 className="text-center">Calculate the odds in Liar's Poker card game</h1>
                <p className="text-center">The exact probability of every poker hand assuming a 24-card deck is used.</p>
            </section>
            <section className="py-16 px-1 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40 flex justify-center bg-neutral-50">
                <form
                    onSubmit={handleFormSubmit}
                    className="flex flex-col gap-3 p-12 inset-shadow-sm rounded-2xl w-fit bg-white"
                >
                    <div className="flex justify-center gap-x-3">
                        <label htmlFor="cardCount">Number of cards on the table</label>
                        <CardCountInput id="cardCount" value={cardCount} setValue={setCardCount} />
                    </div>

                    <div className="flex justify-center gap-x-3">
                        <label htmlFor="handSize">Number of cards on your hand</label>
                        <CardCountInput id="handSize" value={handSize} setValue={setHandSize} />
                    </div>

                    <div className="flex justify-center gap-x-3">
                        <label htmlFor="pokerHand">Poker hand</label>
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
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            disabled={!pokerHand}
                            className="mt-4 py-2 px-4 w-fit rounded-full bg-neutral-200 hover:bg-neutral-300"
                        >
                            Calculate!
                        </button>
                    </div>

                </form>
            </section>
            <section className="py-16 px-1 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40">
                <CalculatorResults {...search} />
            </section>
        </>
    )
}