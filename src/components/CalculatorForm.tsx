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
            className="flex flex-col xl:flex-row gap-3"
        >
            <div className="flex justify-between p-4 gap-x-3 items-baseline bg-white rounded-lg border-6 border-neutral-200">
                <label htmlFor="cardCount">Number of cards on the table:</label>
                <CardCountInput id="cardCount" min={1} value={cardCount} setValue={setCardCount} />
            </div>

            <div className="flex justify-between p-4 gap-x-3 items-baseline bg-white rounded-lg border-6 border-neutral-200">
                <label htmlFor="handSize">Number of cards on your hand:</label>
                <CardCountInput id="handSize" min={1} value={handSize} setValue={setHandSize} />
            </div>
            <div className="flex h-[82px] items-stretch bg-white rounded-lg border-6 border-neutral-200">
                <label htmlFor="pokerHand" className="sr-only">Poker hand</label>
                <select
                    className="w-full mx-4 pe-4"
                    id="pokerHand"
                    value={pokerHand}
                    onChange={(e) => setPokerHand(e.target.value)}
                >
                    <option value="" hidden>Select a poker hand</option>
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
                className="w-full xl:w-fit p-4 xl:p-5 mt-4 xl:mt-0 xl:ms-4 rounded-lg bg-neutral-200 hover:bg-neutral-300"
            >
                Calculate
            </button>
        </form>
    )
}

export default CalculatorForm