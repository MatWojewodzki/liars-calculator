import { z } from "zod";

export const oneDimensionalPokerHandSchema = z.enum([
    "highCard", "pair", "threeOfAKind", "fourOfAKind", "straight", "flush", "straightFlush"
])

export type OneDimensionalPokerHand = z.infer<typeof oneDimensionalPokerHandSchema>

export const twoDimensionalPokerHandSchema = z.enum([
    "twoPair", "fullHouse"
])

export type TwoDimensionalPokerHand = z.infer<typeof twoDimensionalPokerHandSchema>

export const pokerHandSchema = z.union([
    oneDimensionalPokerHandSchema, twoDimensionalPokerHandSchema
])

export type PokerHand = z.infer<typeof pokerHandSchema>