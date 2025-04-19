import {createFileRoute, Link} from '@tanstack/react-router'

export const Route = createFileRoute('/')({
    component: Index,
})

function Index() {
    return (
        <>
            <section>
                <h1>Calculate the probability for every poker hand in th liar's poker card game</h1>
                <p>The exact result for any point in game</p>
                <Link to="/calculator">
                    Open calculator
                </Link>
            </section>

            <section>
                <h2>Game rules</h2>
                <p>There are many variants of liar's poker, so check the one this website refers to.</p>
                <Link to="/game-rules">
                    Check the game rules
                </Link>
            </section>

            <section>
                <h2>Poker hand order according to maths</h2>
                <p>Not sure which hand should be higher? Compare probability plots for all of them.</p>
                <Link to="/hand-order">
                    Suggested poker hand order
                </Link>
            </section>
        </>
    )
}