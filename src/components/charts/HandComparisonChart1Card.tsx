import ProbabilityChart from "./ProbabilityChart"
import { getOneDimHandAllProbabilities, getTwoDimHandAllProbabilities } from "../../utils/getHandProbability.ts"


function HandComparisonChart1Card() {

    const labels = Array.from({ length: 22 }, (_, i) => i + 2)
    const guaranteedProbabilities = labels.map(() => 100)

    return (
        <ProbabilityChart
            title="Poker hand probability plot - 1 card given"
            data={{
                labels: labels,
                datasets: [
                    {
                        label: "High card",
                        data: guaranteedProbabilities
                    },
                    {
                        label: "One pair",
                        data: getOneDimHandAllProbabilities("pair", 1, 1)
                    },
                    {
                        label: "Straight",
                        data: getOneDimHandAllProbabilities("straight", 1, 1)
                    },
                    {
                        label: "Two pair",
                        data: getTwoDimHandAllProbabilities("twoPair", 1, 0, 1)
                    },
                    {
                        label: "Three of a kind",
                        data: getOneDimHandAllProbabilities("threeOfAKind", 1, 1)
                    },
                    {
                        label: "Full house",
                        data: getTwoDimHandAllProbabilities("fullHouse", 1, 0, 1)
                    },
                    {
                        label: "Flush",
                        data: getOneDimHandAllProbabilities("flush", 1, 1)
                    },
                    {
                        label: "Four of a kind",
                        data: getOneDimHandAllProbabilities("fourOfAKind", 1, 1)
                    },
                    {
                        label: "Straight flush",
                        data: getOneDimHandAllProbabilities("straightFlush", 1, 1)
                    }
                ]
            }}
        />
    )
}

export default HandComparisonChart1Card