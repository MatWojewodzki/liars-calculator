import ProbabilityChart from "./ProbabilityChart.tsx"
import {getOneDimHandAllProbabilities, getTwoDimHandAllProbabilities} from "../../utils/getHandProbability.ts";
import getChartLabels from "../../utils/getChartLabels.ts"
import { useTranslation } from "react-i18next"
import {OneDimensionalPokerHand, TwoDimensionalPokerHand} from "../../schemas/pokerHand.ts";

function HandComparisonChart() {
    const { t } = useTranslation(["pokerHands", "handRanking"])

    const pokerHands = [
        { key: "highCard" },
        { key: "pair" },
        { key: "straight" },
        { key: "twoPair", isTwoDim: true },
        { key: "threeOfAKind" },
        { key: "fullHouse", isTwoDim: true },
        { key: "flush" },
        { key: "fourOfAKind" },
        { key: "straightFlush" },
    ]
    return (
        <ProbabilityChart
            title={t("probabilityDetails.pokerHandProbabilityChartTitle", { ns: "handRanking" })}
            data={{
                labels: getChartLabels(0),
                datasets: pokerHands.map(({ key, isTwoDim }) => ({
                    label: t(key),
                    data: isTwoDim
                        ? getTwoDimHandAllProbabilities(key as TwoDimensionalPokerHand, 0, 0, 0)
                        : getOneDimHandAllProbabilities(key as OneDimensionalPokerHand, 0, 0)
                }))
            }}
        />
    )
}

export default HandComparisonChart