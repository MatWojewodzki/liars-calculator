import PlayingCardGroup, { CardGroupData } from "./PlayingCardGroup.tsx"
import classNames from "classnames";

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
        <div className={classNames(
            "bg-linear-to-br from-neutral-50 to-neutral-100",
            "rounded-3xl",
            "py-4 md:py-5 lg:py-8 xl:py-11",
            "px-4 md:px-5 lg:px-8 xl:px-11"
        )}>
            <div className="p-2">
                <p>{hint}</p>
            </div>
            <div className="flex justify-between">
                <div className="flex grow gap-4 md:gap-8 flex-wrap items-center">
                    <PlayingCardGroup {...handShape.cardGroup1Data} />
                    {handShape.cardGroup2Data && <PlayingCardGroup {...handShape.cardGroup2Data} />}
                </div>
                <div className="flex flex-col justify-center">
                    <div className="flex ps-10 flex-col items-end md:flex-row md:items-baseline md:justify-end gap-1">
                        <p className="flex flex-col justify-center text-4xl font-bold">
                            {probability.toFixed(3)}%
                        </p>
                        <p>
                            likely
                        </p>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default ProbabilityCase