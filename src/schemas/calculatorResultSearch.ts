import { z } from "zod"
import { pokerHandSchema } from "./pokerHand.ts";

const calculatorResultSearch = z.object({
    cardCount: z.number().int().min(1).max(23),
    handSize: z.number().int().min(1).max(23),
    pokerHand: pokerHandSchema,
})

export type CalculatorResultSearch = z.infer<typeof calculatorResultSearch>

export default calculatorResultSearch