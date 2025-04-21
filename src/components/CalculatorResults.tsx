import type { CalculatorSearch } from "../schemas/indexSearch.ts"
import getHandDimension from "../utils/getHandDimension.ts"
import {getOneDimHandVariants, getTwoDimHandVariants} from "../utils/getHandVariants.ts"
import {OneDimensionalPokerHand, TwoDimensionalPokerHand} from "../schemas/pokerHand.ts"
import ProbabilityCase from "./ProbabilityCase.tsx";
import { getOneDimHandProbability, getTwoDimHandProbability } from "../utils/getHandProbability.ts"

const oneDimTotalCardCounts = {
    highCard: 1,
    pair: 2,
    threeOfAKind: 3,
    fourOfAKind: 4,
    straight: 5,
    flush: 5,
    straightFlush: 5
}

const twoDimTotalCardCounts = {
    twoPair: [2, 2],
    fullHouse: [3, 2],
}

function CalculatorResults({ pokerHand, handSize, cardCount }: CalculatorSearch) {

    if (pokerHand === undefined || handSize === undefined || cardCount === undefined) {
        return null
    }

    const handDimension = getHandDimension(pokerHand)

    return (
        <>
            {handDimension === 1 ? (
                getOneDimHandVariants(pokerHand as OneDimensionalPokerHand, handSize).map((variant) => (
                    <ProbabilityCase
                        key={`${pokerHand}${variant}`}
                        handShape={{
                            cardGroup1Data: {
                                matchingCardCount: variant,
                                totalCardCount: oneDimTotalCardCounts[pokerHand as OneDimensionalPokerHand]
                            }
                        }}
                        probability={getOneDimHandProbability(
                            pokerHand as OneDimensionalPokerHand,
                            variant,
                            cardCount - handSize
                        )}
                    />
                ))
            ) : (
                getTwoDimHandVariants(pokerHand as TwoDimensionalPokerHand, handSize).map((variant) => (
                    <ProbabilityCase
                        key={`${pokerHand}${variant}`}
                        handShape={{
                            cardGroup1Data: {
                                matchingCardCount: variant[0],
                                totalCardCount: twoDimTotalCardCounts[pokerHand as TwoDimensionalPokerHand][0]
                            },
                            cardGroup2Data: {
                                matchingCardCount: variant[1],
                                totalCardCount: twoDimTotalCardCounts[pokerHand as TwoDimensionalPokerHand][1]
                            }
                        }}
                        probability={getTwoDimHandProbability(
                            pokerHand as TwoDimensionalPokerHand,
                            variant[0],
                            variant[1],
                            cardCount - handSize
                        )}
                    />
                ))
            )}
        </>
    )
}

export default CalculatorResults