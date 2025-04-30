import {createFileRoute} from '@tanstack/react-router'
import calculatorResultSearch from '../schemas/calculatorResultSearch.ts'
import CalculatorResults from '../components/CalculatorResults.tsx'
import CalculatorForm from "../components/CalculatorForm.tsx";

export const Route = createFileRoute('/calculator-results')({
    component: RouteComponent,
    validateSearch: calculatorResultSearch,
})

function RouteComponent() {

    const search = Route.useSearch()

    return (
        <div className="grow flex flex-col">
            <section className="py-16 px-1 flex flex-col items-center bg-neutral-50">
                <CalculatorForm search={search} />
            </section>
            <section className="grow flex flex-col p-16 ">
                <CalculatorResults {...search} />
            </section>
        </div>
    )
}
