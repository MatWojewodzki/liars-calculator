import { PokerHand } from "../../schemas/pokerHand.ts"

type pokerHandSelectProps = {
    value: PokerHand | ""
    setValue: (value: PokerHand) => void
}

function PokerHandSelect({ value, setValue }: pokerHandSelectProps) {
    return (
        <select
            className="w-full mx-4 pe-4"
            id="pokerHand"
            value={value}
            onChange={(e) => setValue(e.target.value as PokerHand)}
        >
            <option value="" hidden>Select a poker hand</option>
            <option value="highCard">high card</option>
            <option value="pair">pair</option>
            <option value="twoPair">two pair</option>
            <option value="straight">straight</option>
            <option value="threeOfAKind">three of a kind</option>
            <option value="fullHouse">full house</option>
            <option value="flush">flush</option>
            <option value="fourOfAKind">four of a kind</option>
            <option value="straightFlush">straight flush</option>
        </select>
    )
}

export default PokerHandSelect