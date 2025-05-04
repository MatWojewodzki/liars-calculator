import ProbabilityChart from "./ProbabilityChart.tsx"
import {getOneDimHandAllProbabilities, getTwoDimHandAllProbabilities} from "../../utils/getHandProbability.ts";

function HandComparisonChart() {
    return (
        <ProbabilityChart
            title="Poker hand probability plot"
            data={{
                labels: Array.from({ length: 23 }, (_, i) => i + 1),
                datasets: [
                    {
                        label: "High card",
                        data: getOneDimHandAllProbabilities("highCard", 0, 0)
                    },
                    {
                        label: "One pair",
                        data: getOneDimHandAllProbabilities("pair", 0, 0)
                    },
                    {
                        label: "Straight",
                        data: getOneDimHandAllProbabilities("straight", 0, 0)
                    },
                    {
                        label: "Two pair",
                        data: getTwoDimHandAllProbabilities("twoPair", 0, 0, 0)
                    },
                    {
                        label: "Three of a kind",
                        data: getOneDimHandAllProbabilities("threeOfAKind", 0, 0)
                    },
                    {
                        label: "Full house",
                        data: getTwoDimHandAllProbabilities("fullHouse", 0, 0, 0)
                    },
                    {
                        label: "Flush",
                        data: getOneDimHandAllProbabilities("flush", 0, 0)
                    },
                    {
                        label: "Four of a kind",
                        data: getOneDimHandAllProbabilities("fourOfAKind", 0, 0)
                    },
                    {
                        label: "Straight flush",
                        data: getOneDimHandAllProbabilities("straightFlush", 0, 0)
                    }
                ]
            }}
        />
    )
}

export default HandComparisonChart