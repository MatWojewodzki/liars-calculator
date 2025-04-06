import probabilityData from "../data/probability_data.json"
import {
    OneDimensionalPokerHand,
    TwoDimensionalPokerHand,
} from "../schemas/pokerHand.ts";

type Probabilities = number[]
type OneDimensionProbabilities = Probabilities[]
type TwoDimensionProbabilities = OneDimensionProbabilities[]

type ProbabilityData = {
    highCard: OneDimensionProbabilities
    pair: OneDimensionProbabilities
    threeOfAKind: OneDimensionProbabilities
    fourOfAKind: OneDimensionProbabilities

    twoPair: TwoDimensionProbabilities
    fullHouse: TwoDimensionProbabilities

    straight: OneDimensionProbabilities
    flush: OneDimensionProbabilities
    straightFlush: OneDimensionProbabilities
}

function validateCardCount(cardCount: number) {
    if (cardCount < 0) throw Error("cardCount is less than 1")
    if (cardCount > 24) throw Error("cardCount is greater than 23")
}

function handleEdgeValues(cardCount: number) {
    if (cardCount === 0) return 0
    if (cardCount === 24) return 1
}

export function getOneDimHandProbability(
    pokerHand: OneDimensionalPokerHand,
    matchedCardCount: number,
    cardCount: number
): number {
    validateCardCount(cardCount)
    handleEdgeValues(cardCount)

    const data = probabilityData as ProbabilityData

    cardCount--
    return data[pokerHand][matchedCardCount][cardCount]
}

export function getTwoDimHandProbability(
    pokerHand: TwoDimensionalPokerHand,
    firstCardMatchedCount: number,
    secondCardMatchedCount: number,
    cardCount: number
): number {
    validateCardCount(cardCount)
    handleEdgeValues(cardCount)

    const data = probabilityData as ProbabilityData

    cardCount--
    return data[pokerHand][firstCardMatchedCount][secondCardMatchedCount][cardCount]
}