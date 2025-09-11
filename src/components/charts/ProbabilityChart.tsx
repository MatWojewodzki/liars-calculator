import { Chart } from 'react-chartjs-2'
import { Chart as ChartJS, LineController, LineElement, PointElement, LinearScale, CategoryScale, Title, Legend, Tooltip, ChartData } from 'chart.js'
import useWindowWidth from "../../hooks/useWindowWidth.ts"
import getChartColor from "../../utils/getChartColor.ts"
import { useTranslation } from "react-i18next"

ChartJS.register(LineController, LineElement, PointElement, LinearScale, CategoryScale, Title, Legend, Tooltip)

type LineChartProps = {
    title: string
    data: ChartData
}

function ProbabilityChart({data, title}: LineChartProps) {
    const { t } = useTranslation("probabilityChart")

    const windowWidth = useWindowWidth()

    const smBreakpoint = windowWidth >= 640
    const lgBreakpoint = windowWidth >= 1024

    // Apply color palette
    data.datasets = data.datasets.map((dataset, index) => ({
        ...dataset,
        borderColor: getChartColor(index),
        backgroundColor: getChartColor(index)
    }))

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
                                text: t("xAxisLabel")
                            }
                        },
                        y: {
                            title: {
                                display: true,
                                text: t("yAxisLabel"),
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