import type {OneDimensionalPokerHand, TwoDimensionalPokerHand } from "../schemas/pokerHand.ts";

export function getOneDimHandVariants(pokerHand: OneDimensionalPokerHand, handSize: number): number[] {
    let variants: number[]
    switch (pokerHand) {
        case "highCard":
            variants = [0]
            break
        case "pair":
            variants =  [0, 1]
            break
        case "threeOfAKind":
            variants = [0, 1, 2]
            break
        case "fourOfAKind":
            variants =  [0, 1, 2, 3]
            break
        case "straight":
        case "flush":
        case "straightFlush":
            variants = [0, 1, 2, 3, 4]
    }

    return variants.filter(variant => variant <= handSize)
}

export function getTwoDimHandVariants(pokerHand: TwoDimensionalPokerHand, handSize: number): number[][] {
    let variants: number[][]
    switch (pokerHand) {
        case "twoPair":
            variants = [[0, 0], [1, 0], [1, 1], [2, 0], [2, 1]]
            break
        case "fullHouse":
            variants = [[0, 0], [0, 1], [0, 2], [1, 0], [1, 1], [1, 2], [2, 0], [2, 1], [2, 2], [3, 0], [3, 1]]
    }

    return variants.filter(variant => variant[0] + variant[1] <= handSize)
}