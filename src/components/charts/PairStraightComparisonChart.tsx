import ProbabilityChart from "./ProbabilityChart.tsx"
import { getOneDimHandAllProbabilities } from "../../utils/getHandProbability.ts"
import getChartLabels from "../../utils/getChartLabels.ts"
import { useTranslation } from "react-i18next"

function PairStraightComparisonChart() {
    const { t } = useTranslation(["pokerHands", "handRanking"])
    return (
        <ProbabilityChart
            title={t("probabilityDetails.pairAndStraightComparisonChartTitle", { ns: "handRanking" })}
            data={{
                labels: getChartLabels(1),
                datasets: [
                    {
                        label: t("pair"),
                        data: getOneDimHandAllProbabilities("pair", 1, 1)
                    },
                    {
                        label: t("straight"),
                        data: getOneDimHandAllProbabilities("straight", 1, 1)
                    }
                ]
            }}
        />
    )
}

export default PairStraightComparisonChart