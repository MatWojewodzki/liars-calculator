import React, {useState} from 'react'
import CardCountInput from "./CardCountInput.tsx"
import PokerHandSelect from "./PokerHandSelect.tsx"
import calculatorResultSearch, { CalculatorResultSearch } from "../../schemas/calculatorResultSearch.ts"
import {useNavigate} from "@tanstack/react-router"
import classNames from "classnames"
import {PokerHand} from "../../schemas/pokerHand.ts";
import { useTranslation } from "react-i18next"

function CalculatorForm({ search }: { search?: CalculatorResultSearch }) {
    const { t } = useTranslation("calculatorForm")

    const navigate = useNavigate()

    const [cardCount, setCardCount] = useState(search?.cardCount || 1)
    const [handSize, setHandSize] = useState(search?.handSize || 1)
    const [pokerHand, setPokerHand] = useState<PokerHand | "">(search?.pokerHand || "")

    const [cardCountLocal, setCardCountLocal] = useState(cardCount.toString())
    const [handSizeLocal, setHandSizeLocal] = useState(handSize.toString())

    function cardCountOnBlurCallback() {
        if (handSize > cardCount) {
            setHandSize(cardCount)
            setHandSizeLocal(cardCount.toString())
        }
    }

    function handSizeOnBlurCallback() {
        if (cardCount < handSize) {
            setCardCount(handSize)
            setCardCountLocal(handSize.toString())
        }
    }

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formValues = { cardCount, handSize, pokerHand }

        // Update the opposite input's value in case the user submitted the form without triggering onBlur
        if (document.activeElement?.id === "cardCount" && cardCount < handSize) {
            formValues.handSize = cardCount
            setHandSize(cardCount)
            setHandSizeLocal(cardCount.toString())
        } else if (document.activeElement?.id === "handSize" && handSize > cardCount) {
            formValues.cardCount = handSize
            setCardCount(handSize)
            setCardCountLocal(handSize.toString())
        }

        navigate({
            to: "/calculator-results",
            search: calculatorResultSearch.parse(formValues)
        })
    }

    return (
        <form
            onSubmit={handleFormSubmit}
            className="flex flex-col xl:flex-row gap-3"
        >
            <div className="flex justify-between p-4 gap-x-3 items-baseline bg-white rounded-lg border-6 border-neutral-200">
                <label htmlFor="cardCount">{t("cardCountLabel")}</label>
                <CardCountInput
                    id="cardCount"
                    min={1} max={23}
                    setValue={setCardCount}
                    localValue={cardCountLocal}
                    setLocalValue={setCardCountLocal}
                    onBlur={cardCountOnBlurCallback}
                />
            </div>

            <div className="flex justify-between p-4 gap-x-3 items-baseline bg-white rounded-lg border-6 border-neutral-200">
                <label htmlFor="handSize">{t("handSizeLabel")}</label>
                <CardCountInput
                    id="handSize"
                    min={1}
                    max={23}
                    setValue={setHandSize}
                    localValue={handSizeLocal}
                    setLocalValue={setHandSizeLocal}
                    onBlur={handSizeOnBlurCallback}
                />
            </div>
            <div className="flex h-[82px] items-stretch bg-white rounded-lg border-6 border-neutral-200">
                <label htmlFor="pokerHand" className="sr-only">Poker hand</label>
                <PokerHandSelect
                    value={pokerHand}
                    setValue={setPokerHand}
                />
            </div>
            <button
                type="submit"
                disabled={!pokerHand}
                className={classNames(
                    "w-full xl:w-fit",
                    "p-4 xl:p-5 mt-4 xl:mt-0 xl:ms-4 rounded-lg",
                    "bg-neutral-200",
                    "disabled:bg-neutral-200 disabled:text-neutral-500",
                    "not-disabled:hover:bg-neutral-300",
                    "not-disabled:active:scale-98 not-disabled:active:bg-neutral-300",
                    "font-semibold"
                )}
            >
                {t("calculateButton")}
            </button>
        </form>
    )
}

export default CalculatorForm