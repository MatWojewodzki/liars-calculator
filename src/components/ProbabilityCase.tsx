import PlayingCardGroup, { CardGroupData } from "./PlayingCardGroup.tsx"

type ProbabilityCaseProps = {
    handShape: {
        cardGroup1Data: CardGroupData,
        cardGroup2Data?: CardGroupData,
    }
    probability: number
}

function createHint(cardGroupData: CardGroupData) {
    const {matchingCardCount: matching, totalCardCount: total} = cardGroupData
    return `${matching > 0 ? `${matching} out` : "none"} of the ${total} card${total > 1 ? "s" : ""} match${matching == 1 ? "es" : ""}`
}

function ProbabilityCase({ handShape, probability }: ProbabilityCaseProps) {

    const { cardGroup1Data, cardGroup2Data } = handShape

    const hint1 = createHint(cardGroup1Data)
    const hint2 = cardGroup2Data ? createHint(cardGroup2Data) : null

    const hint = hint2 ? `${hint1} and ${hint2}` : hint1

    return (
        <div>
            <div className="flex justify-between">
                <div className="flex grow justify-start gap-x-8">
                    <PlayingCardGroup {...handShape.cardGroup1Data} />
                    {handShape.cardGroup2Data && <PlayingCardGroup {...handShape.cardGroup2Data} />}
                </div>
                <div className="flex items-center justify-end gap-1 md:flex-col md:justify-center md:items-end">
                    <p className="flex flex-col justify-center text-4xl font-bold">
                        {(probability * 100).toFixed(2)}%
                    </p>
                    <p>
                        likely
                    </p>
                </div>
            </div>
            <div className="p-2">
                <p>...{hint}</p>
            </div>
        </div>


    )
}

export default ProbabilityCase