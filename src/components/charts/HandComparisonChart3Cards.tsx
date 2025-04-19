import ProbabilityChart from "./ProbabilityChart"
import { getOneDimHandAllProbabilities, getTwoDimHandAllProbabilities } from "../../utils/getHandProbability.ts"

function HandComparisonChart3Cards() {

    const labels = Array.from({ length: 20 }, (_, i) => i + 4)
    const guaranteedProbabilities = labels.map(() => 100)

    return (
        <ProbabilityChart
            title="Poker hand probability plot - 3 cards given"
            data={{
                labels: labels,
                datasets: [
                    {
                        label: "High card",
                        data: guaranteedProbabilities
                    },
                    {
                        label: "One pair",
                        data: getOneDimHandAllProbabilities("pair", 1, 3)
                    },
                    {
                        label: "Straight",
                        data: getOneDimHandAllProbabilities("straight", 3, 3)
                    },
                    {
                        label: "Two pair",
                        data: getTwoDimHandAllProbabilities("twoPair", 1, 1, 3)
                    },
                    {
                        label: "Three of a kind",
                        data: getOneDimHandAllProbabilities("threeOfAKind", 1, 3)
                    },
                    {
                        label: "Full house",
                        data: getTwoDimHandAllProbabilities("fullHouse", 1, 1, 3)
                    },
                    {
                        label: "Flush",
                        data: getOneDimHandAllProbabilities("flush", 2, 3)
                    },
                    {
                        label: "Four of a kind",
                        data: getOneDimHandAllProbabilities("fourOfAKind", 1, 3)
                    },
                    {
                        label: "Straight flush",
                        data: getOneDimHandAllProbabilities("straightFlush", 2, 3)
                    }
                ]
            }}
        />
    )
}

export default HandComparisonChart3Cards