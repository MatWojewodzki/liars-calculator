import ProbabilityChart from "./ProbabilityChart.tsx"
import {getOneDimHandAllProbabilities, getTwoDimHandAllProbabilities} from "../../utils/getHandProbability.ts";
import getChartLabels from "../../utils/getChartLabels.ts";

function HandComparisonChart() {
    return (
        <ProbabilityChart
            title="Poker hand probability"
            data={{
                labels: getChartLabels(0),
                datasets: [
                    {
                        label: "high card",
                        data: getOneDimHandAllProbabilities("highCard", 0, 0)
                    },
                    {
                        label: "pair",
                        data: getOneDimHandAllProbabilities("pair", 0, 0)
                    },
                    {
                        label: "straight",
                        data: getOneDimHandAllProbabilities("straight", 0, 0)
                    },
                    {
                        label: "two pair",
                        data: getTwoDimHandAllProbabilities("twoPair", 0, 0, 0)
                    },
                    {
                        label: "three of a kind",
                        data: getOneDimHandAllProbabilities("threeOfAKind", 0, 0)
                    },
                    {
                        label: "full house",
                        data: getTwoDimHandAllProbabilities("fullHouse", 0, 0, 0)
                    },
                    {
                        label: "flush",
                        data: getOneDimHandAllProbabilities("flush", 0, 0)
                    },
                    {
                        label: "four of a kind",
                        data: getOneDimHandAllProbabilities("fourOfAKind", 0, 0)
                    },
                    {
                        label: "straight flush",
                        data: getOneDimHandAllProbabilities("straightFlush", 0, 0)
                    }
                ]
            }}
        />
    )
}

export default HandComparisonChart