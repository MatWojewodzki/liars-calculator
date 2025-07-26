// Color palette provided by Carbon Design System https://carbondesignsystem.com/data-visualization/color-palettes/
const chartColorPaletteLight = [
    "#6929c4",
    "#1192e8",
    "#005d5d",
    "#9f1853",
    "#fa4d56",
    "#570408",
    "#198038",
    "#002d9c",
    "#ee538b",
]

function getChartColor(index: number) {
    return chartColorPaletteLight[index]
}

export default getChartColor