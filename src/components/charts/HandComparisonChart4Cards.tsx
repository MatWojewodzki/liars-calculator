import ProbabilityChart from "./ProbabilityChart"
import { getOneDimHandAllProbabilities, getTwoDimHandAllProbabilities } from "../../utils/getHandProbability.ts"

function HandComparisonChart4Cards() {

    const labels = Array.from({ length: 19 }, (_, i) => i + 5)
    const guaranteedProbabilities = labels.map(() => 100)

    return (
        <ProbabilityChart
            title="Poker hand probability plot - 4 cards given"
            data={{
                labels: labels,
                datasets: [
                    {
                        label: "High card",
                        data: guaranteedProbabilities
                    },
                    {
                        label: "One pair",
                        data: guaranteedProbabilities
                    },
                    {
                        label: "Straight",
                        data: getOneDimHandAllProbabilities("straight", 3, 4)
                    },
                    {
                        label: "Two pair",
                        data: getTwoDimHandAllProbabilities("twoPair", 2, 1, 4)
                    },
                    {
                        label: "Three of a kind",
                        data: getOneDimHandAllProbabilities("threeOfAKind", 2, 4)
                    },
                    {
                        label: "Full house",
                        data: getTwoDimHandAllProbabilities("fullHouse", 2, 1, 4)
                    },
                    {
                        label: "Flush",
                        data: getOneDimHandAllProbabilities("flush", 2, 4)
                    },
                    {
                        label: "Four of a kind",
                        data: getOneDimHandAllProbabilities("fourOfAKind", 2, 4)
                    },
                    {
                        label: "Straight flush",
                        data: getOneDimHandAllProbabilities("straightFlush", 2, 4)
                    }
                ]
            }}
        />
    )
}

export default HandComparisonChart4Cards