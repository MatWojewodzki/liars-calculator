import { Chart } from 'react-chartjs-2'
import { Chart as ChartJS, LineController, LineElement, PointElement, LinearScale, CategoryScale, Title, Legend } from 'chart.js'
import probability_data from "../data/probability_data.json";

ChartJS.register(LineController, LineElement, PointElement, LinearScale, CategoryScale, Title, Legend)

function HierarchyChart() {
    return (
        <Chart
            type="line"
            datasetIdKey="handHierarchy"
            data={{
                labels: Array.from({ length: 23 }, (_, i) => i + 1),
                datasets: [
                    {
                        label: "High card",
                        data: probability_data.highCard[0]
                    },
                    {
                        label: "Pair",
                        data: probability_data.pair[0]
                    },
                    {
                        label: "Two pair",
                        data: probability_data.twoPair[0][0]
                    },
                    {
                        label: "Straight",
                        data: probability_data.straight[0]
                    },
                    {
                        label: "Three of a kind",
                        data: probability_data.threeOfAKind[0]
                    },
                    {
                        label: "Full house",
                        data: probability_data.fullHouse[0][0]
                    },
                    {
                        label: "Flush",
                        data: probability_data.flush[0]
                    },
                    {
                        label: "Four of a kind",
                        data: probability_data.fourOfAKind[0]
                    },
                    {
                        label: "Straight flush",
                        data: probability_data.straightFlush[0]
                    }
                ]
            }}
            options={{
                plugins: {
                    legend: {
                        position: "bottom",
                        display: true
                    }
                }
            }}
        />
    )
}

export default HierarchyChart