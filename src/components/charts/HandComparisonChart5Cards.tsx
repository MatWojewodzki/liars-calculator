import ProbabilityChart from "./ProbabilityChart"
import { getOneDimHandAllProbabilities, getTwoDimHandAllProbabilities } from "../../utils/getHandProbability.ts"

function HandComparisonChart5Cards() {

    const labels = Array.from({ length: 18 }, (_, i) => i + 6)
    const guaranteedProbabilities = labels.map(() => 100)

    return (
        <ProbabilityChart
            title="Poker hand probability plot - 5 cards given"
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
                        data: getOneDimHandAllProbabilities("straight", 4, 5)
                    },
                    {
                        label: "Two pair",
                        data: getTwoDimHandAllProbabilities("twoPair", 2, 1, 5)
                    },
                    {
                        label: "Three of a kind",
                        data: getOneDimHandAllProbabilities("threeOfAKind", 2, 5)
                    },
                    {
                        label: "Full house",
                        data: getTwoDimHandAllProbabilities("fullHouse", 2, 1, 5)
                    },
                    {
                        label: "Flush",
                        data: getOneDimHandAllProbabilities("flush", 2, 5)
                    },
                    {
                        label: "Four of a kind",
                        data: getOneDimHandAllProbabilities("fourOfAKind", 2, 5)
                    },
                    {
                        label: "Straight flush",
                        data: getOneDimHandAllProbabilities("straightFlush", 2, 5)
                    }
                ]
            }}
        />
    )
}

export default HandComparisonChart5Cards