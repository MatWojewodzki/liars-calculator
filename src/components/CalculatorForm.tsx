import React, {useState} from 'react';
import CardCountInput from "./CardCountInput.tsx";
import calculatorResultSearch, { CalculatorResultSearch } from "../schemas/calculatorResultSearch.ts"
import {useNavigate} from "@tanstack/react-router";

function CalculatorForm({ search }: { search?: CalculatorResultSearch }) {

    const navigate = useNavigate()

    const [cardCount, setCardCount] = useState(search?.cardCount || 1)
    const [handSize, setHandSize] = useState(search?.handSize || 1)
    const [pokerHand, setPokerHand] = useState(search?.pokerHand || "")

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        navigate({
            to: "/calculator-results",
            search: calculatorResultSearch.parse({
                cardCount, handSize, pokerHand
            })
        })
    }

    return (
        <form
            onSubmit={handleFormSubmit}
            className="flex flex-col lg:flex-row items-stretch lg:items-baseline gap-3"
        >
            <div className="flex justify-center p-4 gap-x-3 items-baseline bg-white rounded-lg">
                <label htmlFor="cardCount">Number of cards on the table</label>
                <CardCountInput id="cardCount" value={cardCount} setValue={setCardCount} />
            </div>

            <div className="flex justify-center p-4 gap-x-3 items-baseline bg-white rounded-lg">
                <label htmlFor="handSize">Number of cards on your hand</label>
                <CardCountInput id="handSize" value={handSize} setValue={setHandSize} />
            </div>
            <div className="flex justify-center p-4 gap-x-3 items-baseline bg-white rounded-lg">
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
                className="w-full lg:w-fit p-4 mt-4 lg:mt-0 lg:ms-4 rounded-lg bg-neutral-200 hover:bg-neutral-300"
            >
                Calculate!
            </button>
        </form>
    )
}

export default CalculatorForm