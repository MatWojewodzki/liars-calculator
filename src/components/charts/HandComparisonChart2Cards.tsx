import ProbabilityChart from "./ProbabilityChart"
import { getOneDimHandAllProbabilities, getTwoDimHandAllProbabilities } from "../../utils/getHandProbability.ts"

function HandComparisonChart2Cards() {

    const labels = Array.from({ length: 21 }, (_, i) => i + 3)
    const guaranteedProbabilities = labels.map(() => 100)

    return (
        <ProbabilityChart
            title="Poker hand probability plot - 2 cards given"
            data={{
                labels: labels,
                datasets: [
                    {
                        label: "High card",
                        data: guaranteedProbabilities
                    },
                    {
                        label: "One pair",
                        data: getOneDimHandAllProbabilities("pair", 1, 2)
                    },
                    {
                        label: "Straight",
                        data: getOneDimHandAllProbabilities("straight", 2, 2)
                    },
                    {
                        label: "Two pair",
                        data: getTwoDimHandAllProbabilities("twoPair", 1, 1, 2)
                    },
                    {
                        label: "Three of a kind",
                        data: getOneDimHandAllProbabilities("threeOfAKind", 1, 2)
                    },
                    {
                        label: "Full house",
                        data: getTwoDimHandAllProbabilities("fullHouse", 1, 1, 2)
                    },
                    {
                        label: "Flush",
                        data: getOneDimHandAllProbabilities("flush", 1, 2)
                    },
                    {
                        label: "Four of a kind",
                        data: getOneDimHandAllProbabilities("fourOfAKind", 1, 2)
                    },
                    {
                        label: "Straight flush",
                        data: getOneDimHandAllProbabilities("straightFlush", 1, 2)
                    }
                ]
            }}
        />
    )
}

export default HandComparisonChart2Cards