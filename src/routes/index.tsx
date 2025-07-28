import {createFileRoute, Link} from '@tanstack/react-router'
import CalculatorForm from "../components/CalculatorForm.tsx"
import {ReactNode} from "react";
import classNames from "classnames";

export const Route = createFileRoute('/')({
    component: Index
})

function Index() {

    return (
        <div className="grow flex flex-col">
            <section className="py-16 px-4 flex flex-col items-center bg-linear-to-b from-neutral-50 to-neutral-100">

                <h1 className="text-center font-extrabold text-5xl">Calculate the odds in liar's poker card game</h1>
                <p className="text-center text-2xl mt-4 mb-12">The exact probability of every poker hand assuming a 24-card deck is used.</p>

                <CalculatorForm />
            </section>
            <div className="grow flex flex-col p-16">
                <section className={classNames(
                    "flex flex-col lg:flex-row justify-center items-center lg:items-start gap-16 lg:gap-24 2xl:gap-32"
                )}>
                    <InfoSection header="Satisfy your curiosity">
                        Have you ever guessed a poker hand correctly and
                        thought <i className="italic">"How lucky was I?"</i> Look no further!
                        Check the odds in our calculator instantly.
                    </InfoSection>
                    <InfoSection header="Analyze the poker hands">
                        Have you always wondered what the poker hand order should be? Check out
                        our <Link to="/hand-ranking" className="underline">analysis</Link>.
                    </InfoSection>
                    <InfoSection header="Learn the rules">
                        Not sure how to play liar's poker yet? Go check out
                        the <Link to="/game-rules" className="underline">game rules</Link>.
                    </InfoSection>
                </section>
            </div>
        </div>
    )
}

function InfoSection({ header, children }: { header: string, children?: ReactNode }) {
    return (
        <div className="grow flex flex-col gap-4 items-center lg:max-w-64 2xl:max-w-96">
            <h2 className="text-xl font-semibold">
                {header}
            </h2>
            <p className="text-center">
                {children}
            </p>
        </div>
    )
}