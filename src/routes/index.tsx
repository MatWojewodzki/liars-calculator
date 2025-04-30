import { createFileRoute } from '@tanstack/react-router'
import CalculatorForm from "../components/CalculatorForm.tsx"

export const Route = createFileRoute('/')({
    component: Index
})

function Index() {

    return (
        <div className="grow flex flex-col">
            <section className="py-16 px-1 flex flex-col items-center bg-neutral-50">

                <h1 className="text-center font-extrabold text-5xl">Calculate the odds in Liar's Poker card game</h1>
                <p className="text-center text-2xl mt-2 mb-12">The exact probability of every poker hand assuming a 24-card deck is used.</p>

                <CalculatorForm />
            </section>
            <section className="grow flex flex-col p-16 ">
                No content for now
            </section>
        </div>
    )
}