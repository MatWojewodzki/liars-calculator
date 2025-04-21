import { z } from "zod"
import { pokerHandSchema } from "./pokerHand.ts";

const indexSearch = z.object({
    cardCount: z.number().int().min(1).max(23).optional(),
    handSize: z.number().int().min(1).max(23).optional(),
    pokerHand: pokerHandSchema.optional(),
})

export type CalculatorSearch = z.infer<typeof indexSearch>

export default indexSearch