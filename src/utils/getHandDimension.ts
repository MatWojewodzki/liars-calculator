import { PokerHand, oneDimensionalPokerHandSchema } from "../schemas/pokerHand.ts";

type HandDimension = 1 | 2

function getHandDimension(hand: PokerHand): HandDimension {
    const oneDimensionalPokerHand = oneDimensionalPokerHandSchema.safeParse(hand)
    return oneDimensionalPokerHand.success ? 1 : 2
}

export default getHandDimension