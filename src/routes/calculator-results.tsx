import { createFileRoute } from '@tanstack/react-router'
import calculatorResultSearch from '../schemas/calculatorResultSearch.ts'
import CalculatorResults from '../components/calculator-results/CalculatorResults.tsx'
import CalculatorForm from "../components/calculator-form/CalculatorForm.tsx"
import ErrorPage from "../components/main-elements/ErrorPage.tsx"

export const Route = createFileRoute('/calculator-results')({
    component: RouteComponent,
    validateSearch: calculatorResultSearch,
    errorComponent: () => (
        <ErrorPage header="Invalid URL" description="The provided URL is invalid, so we can't display the results." />
    ),
})

function RouteComponent() {

    const search = Route.useSearch()

    return (
        <div className="grow flex flex-col">
            <section className="py-16 px-1 flex flex-col items-center bg-linear-to-b from-neutral-50 to-neutral-100">
                <CalculatorForm search={search} />
            </section>
            <section className="grow flex flex-col py-16 md:px-5 lg:px-8 xl:px-11">
                <CalculatorResults {...search} />
            </section>
        </div>
    )
}