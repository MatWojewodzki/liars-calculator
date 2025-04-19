import { Chart } from 'react-chartjs-2'
import { Chart as ChartJS, LineController, LineElement, PointElement, LinearScale, CategoryScale, Title, Legend, Tooltip, ChartData } from 'chart.js'

ChartJS.register(LineController, LineElement, PointElement, LinearScale, CategoryScale, Title, Legend, Tooltip)

type LineChartProps = {
    title: string
    data: ChartData
}

function ProbabilityChart({data, title}: LineChartProps) {
    return (
        <Chart
            type="line"
            data={data}
            options={{
                plugins: {
                    legend: {
                        position: "right",
                        display: true
                    },
                    title: {
                        display: true,
                        text: title
                    }
                },
                interaction: {
                    mode: "index",
                    intersect: true
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: "Number of cards drawn from the deck"
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: "Probability"
                        }
                    }
                }
            }}
        />
    )
}

export default ProbabilityChart