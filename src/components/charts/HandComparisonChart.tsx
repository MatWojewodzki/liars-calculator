import ProbabilityChart from "./ProbabilityChart.tsx";
import probabilityData from "../../data/probability_data.json"

function HandComparisonChart() {
    return (
        <ProbabilityChart
            title="Poker hand probability plot"
            data={{
                labels: Array.from({ length: 23 }, (_, i) => i + 1),
                datasets: [
                    {
                        label: "High card",
                        data: probabilityData.highCard[0]
                    },
                    {
                        label: "One pair",
                        data: probabilityData.pair[0]
                    },
                    {
                        label: "Straight",
                        data: probabilityData.straight[0]
                    },
                    {
                        label: "Two pair",
                        data: probabilityData.twoPair[0][0]
                    },
                    {
                        label: "Three of a kind",
                        data: probabilityData.threeOfAKind[0]
                    },
                    {
                        label: "Full house",
                        data: probabilityData.fullHouse[0][0]
                    },
                    {
                        label: "Flush",
                        data: probabilityData.flush[0]
                    },
                    {
                        label: "Four of a kind",
                        data: probabilityData.fourOfAKind[0]
                    },
                    {
                        label: "Straight flush",
                        data: probabilityData.straightFlush[0]
                    }
                ]
            }}
        />
    )
}

export default HandComparisonChart