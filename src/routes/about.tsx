import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
    component: About,
})

function About() {
    return (
        <div className="max-w-5xl mx-auto px-4 py-16">
            <h1 className="text-2xl font-semibold">About</h1>
            <p className="mt-4">
                Liar's Calculator is a website allowing you to check the exact probability of a player's guess
                being correct in a liar's poker card game. It also features a description of the game rules
                and a poker hand ranking advised according to probability.
                All the probability data presented on this website has been calculated using a Python script available
                on{" "}
                <a
                    href="https://github.com/MatWojewodzki/liars-poker-probabilities/blob/main/probability_data_generator.py"
                    className="underline"
                >
                    GitHub
                </a>
                .
            </p>
            <p className="mt-4 italic">
                The probability data provided on this website has not been verified for accuracy or completeness.
                The website is intended for educational and illustrative purposes only — not as gambling advice
                or a guarantee of outcomes.
            </p>
        </div>
    )
}
