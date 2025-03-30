import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/calculator/results')({
    component: CalculatorResults,
})

function CalculatorResults() {
    const search = Route.useSearch()
    return (
        <div>{JSON.stringify(search)}</div>
    )
}
