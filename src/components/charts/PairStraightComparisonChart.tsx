import ProbabilityChart from "./ProbabilityChart.tsx"
import { getOneDimHandAllProbabilities } from "../../utils/getHandProbability.ts"
import getChartLabels from "../../utils/getChartLabels.ts";

function PairStraightComparisonChart() {
    return (
        <ProbabilityChart
            title="Pair and straight probability – 1 card is given"
            data={{
                labels: getChartLabels(1),
                datasets: [
                    {
                        label: "pair",
                        data: getOneDimHandAllProbabilities("pair", 1, 1)
                    },
                    {
                        label: "straight",
                        data: getOneDimHandAllProbabilities("straight", 1, 1)
                    }
                ]
            }}
        />
    )
}

export default PairStraightComparisonChart