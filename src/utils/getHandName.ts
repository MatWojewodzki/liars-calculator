import type {PokerHand} from "../schemas/pokerHand.ts"

const handNames: Record<PokerHand, string> = {
    highCard: "high card",
    pair: "pair",
    straight: "straight",
    twoPair: "two pair",
    threeOfAKind: "three of a kind",
    fullHouse: "full house",
    flush: "flush",
    fourOfAKind: "four of a kind",
    straightFlush: "straight flush"
}

function getHandName(pokerHand: PokerHand): string {
    return handNames[pokerHand]
}

export default getHandName
