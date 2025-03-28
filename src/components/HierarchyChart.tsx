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
                        data: probability_data.rank["1+0"]
                    },
                    {
                        label: "Pair",
                        data: probability_data.rank["2+0"]
                    },
                    {
                        label: "Two pair",
                        data: probability_data.rank["2+2"]
                    },
                    {
                        label: "Straight",
                        data: probability_data.straight["5"]
                    },
                    {
                        label: "Three of a kind",
                        data: probability_data.rank["3+0"]
                    },
                    {
                        label: "Full house",
                        data: probability_data.rank["3+2"]
                    },
                    {
                        label: "Flush",
                        data: probability_data.flush["5"]
                    },
                    {
                        label: "Four of a kind",
                        data: probability_data.rank["4+0"]
                    },
                    {
                        label: "Straight flush",
                        data: probability_data.straight_flush["5"]
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