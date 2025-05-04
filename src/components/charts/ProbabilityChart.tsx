import { Chart } from 'react-chartjs-2'
import { Chart as ChartJS, LineController, LineElement, PointElement, LinearScale, CategoryScale, Title, Legend, Tooltip, ChartData } from 'chart.js'
import useWindowWidth from "../../hooks/useWindowWidth.ts";

ChartJS.register(LineController, LineElement, PointElement, LinearScale, CategoryScale, Title, Legend, Tooltip)

type LineChartProps = {
    title: string
    data: ChartData
}

function ProbabilityChart({data, title}: LineChartProps) {

    const windowWidth = useWindowWidth()

    const smBreakpoint = windowWidth >= 640
    const lgBreakpoint = windowWidth >= 1024

    return (
        <div className="mt-4 w-full h-96 md:h-128">
            <Chart
                type="line"
                data={data}
                options={{
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: lgBreakpoint ? "right" : "bottom",
                            display: true
                        },
                        title: {
                            display: true,
                            text: title
                        },
                        tooltip: {
                            callbacks: {
                                label: (item) =>
                                    `${item.dataset.label}: ${item.formattedValue}%`
                                }
                            }
                    },
                    interaction: {
                        mode: "index",
                        intersect: false
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
                                text: "Probability [%]",
                                padding: smBreakpoint ? undefined : 0
                            }
                        }
                    }
                }}
            />
        </div>
    )
}

export default ProbabilityChart