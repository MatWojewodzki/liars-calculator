import PlayingCardGroup, { CardGroupData } from "./PlayingCardGroup.tsx"
import classNames from "classnames"
import { useTranslation } from "react-i18next"
import {TFunction} from "i18next";

type ProbabilityCaseProps = {
    handShape: {
        cardGroup1Data: CardGroupData,
        cardGroup2Data?: CardGroupData,
    }
    probability: number
}

function createHint(t: TFunction<"calculatorResults", undefined>, cardGroupData: CardGroupData, isSecondHint: boolean) {

    // const {matchingCardCount: matching, totalCardCount: total} = cardGroupData
    if (cardGroupData.totalCardCount === 1) {
        return t("dontOwnSingle")
    }
    // return `${isSecondHint ? "" : "You own "}${matching > 0 ? matching : "none"} of the ${total}${isSecondHint ? " other" : ""} cards required`
    return t(
        isSecondHint ? "hint2" : "hint1",
        { matchingCardCount: cardGroupData.matchingCardCount, totalCardCount: cardGroupData.totalCardCount}
    )
}

function ProbabilityCase({ handShape, probability }: ProbabilityCaseProps) {
    const { t } = useTranslation("calculatorResults")

    const { cardGroup1Data, cardGroup2Data } = handShape

    const hint1 = createHint(t, cardGroup1Data, false)
    const hint2 = cardGroup2Data ? createHint(t, cardGroup2Data, true) : null

    const hint = hint2 ? `${hint1}${hint2}` : `${hint1}.`

    return (
        <div className={classNames(
            "bg-linear-to-br from-neutral-50 to-neutral-100",
            "rounded-3xl",
            "py-4 md:py-5 lg:py-8 xl:py-11",
            "px-4 md:px-5 lg:px-8 xl:px-11"
        )}>

            <div className="flex justify-between">
                <div className="flex grow gap-4 md:gap-8 flex-wrap items-center">
                    <PlayingCardGroup {...handShape.cardGroup1Data} />
                    {handShape.cardGroup2Data && <PlayingCardGroup {...handShape.cardGroup2Data} />}
                </div>
                <div className="flex flex-col justify-center">
                    <div className={classNames(
                        "flex flex-col md:flex-row",
                        "items-end md:items-baseline md:justify-end",
                        "ps-10 sm:gap-1 lg:gap-2"
                    )}>
                        <p className="flex flex-col justify-center text-3xl sm:text-4xl lg:text-5xl font-bold">
                            {probability.toFixed(3)}%
                        </p>
                        <p className="lg:text-lg">
                            {t("chance")}
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-4 sm:mt-8">
                <h3 className="text-sm lg:text-base">{hint}</h3>
            </div>
        </div>


    )
}

export default ProbabilityCase