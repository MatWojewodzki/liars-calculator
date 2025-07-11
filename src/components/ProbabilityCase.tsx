import PlayingCardGroup, { CardGroupData } from "./PlayingCardGroup.tsx"
import classNames from "classnames";

type ProbabilityCaseProps = {
    handShape: {
        cardGroup1Data: CardGroupData,
        cardGroup2Data?: CardGroupData,
    }
    probability: number
}

function createHint(cardGroupData: CardGroupData, isSecondHint: boolean) {
    const {matchingCardCount: matching, totalCardCount: total} = cardGroupData
    if (total === 1) {
        return matching === 1 ? "you own the card" : "you don't own the card"
    }
    return `${isSecondHint ? "" : "you own "}${matching > 0 ? matching : "none"} of the ${total}${isSecondHint ? " other" : ""} cards required`
}

function ProbabilityCase({ handShape, probability }: ProbabilityCaseProps) {

    const { cardGroup1Data, cardGroup2Data } = handShape

    const hint1 = createHint(cardGroup1Data, false)
    const hint2 = cardGroup2Data ? createHint(cardGroup2Data, true) : null

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