import {createFileRoute, Link} from '@tanstack/react-router'
import CalculatorForm from "../components/CalculatorForm.tsx"

export const Route = createFileRoute('/')({
    component: Index
})

function Index() {

    return (
        <div className="grow flex flex-col">
            <section className="py-16 px-4 flex flex-col items-center bg-linear-to-b from-neutral-50 to-neutral-100">

                <h1 className="text-center font-extrabold text-5xl">Calculate the odds in liar's poker card game</h1>
                <p className="text-center text-2xl mt-2 mb-12">The exact probability of every poker hand assuming a 24-card deck is used.</p>

                <CalculatorForm />
            </section>
            <div className="grow flex flex-col p-16 ">
                <section className="flex flex-wrap justify-around gap-16">
                    <div className="flex flex-col gap-4 items-center max-w-64">
                        <h2 className="text-xl font-semibold">
                            Satisfy your curiosity
                        </h2>
                        <p className="text-center">
                            Have you ever guessed a poker hand correctly and
                            thought <i className="italic">"How lucky was I?"</i> Look no further!
                            Check the odds in our calculator instantly.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4 items-center max-w-64">
                        <h2 className="text-xl font-semibold">
                            Analyze the poker hands
                        </h2>
                        <p className="text-center">
                            Have you always wondered what the poker hand order should be? Check out
                            our <Link to="/hand-order" className="underline">analysis</Link>.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4 items-center max-w-64">
                        <h2 className="text-xl font-semibold">
                            Learn the rules
                        </h2>
                        <p className="text-center">
                            Not sure how to play liar's poker yet? Go check out
                            the <Link to="/game-rules" className="underline">game rules</Link>.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    )
}